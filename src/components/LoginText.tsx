'use client';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginText() {
  const { data: session } = useSession();
  const router = useRouter();
  const onClick = () => {
    if (session) {
      signOut({ redirect: false }).then(() => {
        router.replace('/auth/signin');
      });

      return;
    }

    router.push('/auth/signin');
  };

  return (
    <li>
      <a
        style={{ cursor: 'pointer' }}
        onClick={() => {
          onClick();
        }}
      >
        {session ? 'Logout' : 'Login'}
      </a>
    </li>
  );
}
