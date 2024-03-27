'use client';
import React, { FormEvent, useEffect, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import styles from './LoginPage.module.css';
import { redirect, useRouter } from 'next/navigation';

export default function SignInPage() {
  const router = useRouter();
  const { data: session } = useSession();
  const [showToast, setShowToast] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  // console.log(data, 'data');
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const username = (event.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
    const password = (event.currentTarget.elements.namedItem('password') as HTMLInputElement).value;
    try {
      const result = await signIn('credentials', {
        redirect: false, // 페이지 리다이렉션 방지
        username,
        password,
      });

      if (result?.error) {
        console.log(result.error);
        const error = result.error.split(',');
        setErrorMessage(error[1].split(': ')[1]);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3500); // 애니메이션 지속 시간을 포함한 총 시간
      } else {
        router.push('/products');
      }
    } catch (err) {
      console.log(err, 'err');
    }
  };

  useEffect(() => {
    if (session) {
      router.replace('/');
    }
  }, [router, session]);

  return (
    <>
      {showToast && (
        <div
          className={`${styles.toast} ${showToast ? styles['toast-show'] : styles['toast-hide']}`}
          onAnimationEnd={() => setShowToast(false)}
        >
          {errorMessage}
        </div>
      )}

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
    </>
  );
}
