'use client';
import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
export default function Home() {
  return (
    <h1>
      Home Page <Link href={'/products'}>productrs</Link>
      <button onClick={() => signIn()}>로그인</button>
    </h1>
  );
}
