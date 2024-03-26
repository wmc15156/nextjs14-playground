import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // 사용자 인증 로직 구현
        const authResponse = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
            // expiresInMins: 60, // optional
          }),
        });

        if (!authResponse.ok) {
          return null;
        }
        const user = await authResponse.json();
        return {
          name: user.username,
          ...user,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async signIn({ user, account, credentials }) {
      return true;
    },
    async jwt({ token, account, user }) {
      if (user) {
        token.token = user.token;
      }
      return token;
    },
    async session({ session, user, token }) {
      const data = token.token as string;

      session.access_token = data;
      return session;
    },
  },
};
