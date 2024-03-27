'use client';

import styles from '@/app/profile/Profile.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useMe } from '@/hooks/useMe';

export default function ProfileForm() {
  const [profile, setProfile] = useState({
    name: '홍길동',
    email: 'hong@gildong.com',
  });

  const { data: session } = useSession();

  const { data: me, isLoading, error } = useMe(session?.access_token);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`이름: ${profile.name}, 이메일: ${profile.email}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <img className={styles.profileImage} src={me?.image} alt='프로필 이미지' />

      <div className={styles.editableField}>
        <label htmlFor='name' className={styles.field}>
          이름:
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className={styles.inputField}
          value={me?.username}
          disabled
        />
      </div>

      <div className={styles.editableField}>
        <label htmlFor='email' className={styles.field}>
          이메일:
        </label>
        <input
          id='email'
          name='email'
          type='email'
          className={styles.inputField}
          value={me?.email}
          disabled
        />
      </div>

      <button type='submit' className={styles.submitButton}>
        저장
      </button>
    </form>
  );
}
