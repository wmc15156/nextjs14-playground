'use client';
import React, { FormEvent, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from './LoginPage.module.css';
import { redirect, useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();

  // console.log(data, 'data');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;

    const result = await signIn('credentials', {
      redirect: false, // 페이지 리다이렉션 방지
      username,
      password,
    });

    if (result?.error) {
      // 로그인 실패 처리
      console.error(result.error);
    } else {
      router.push('/products');
    }
  };

  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [session]);

  console.log('signin page');

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor='username' className={styles.label}>
        Username
      </label>
      <input id='username' name='username' type='text' required className={styles.input} />
      <label htmlFor='password' className={styles.label}>
        Password
      </label>
      <input id='password' name='password' type='password' required className={styles.input} />
      <button type='submit' className={styles.button}>
        Log In
      </button>
    </form>
  );
}
