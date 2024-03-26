import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authOptions } from '@/config';

export default NextAuth(authOptions);
