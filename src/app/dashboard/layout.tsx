import React from 'react';
import { fetchData } from '@/lib';

type Props = {
  children: React.ReactNode;
  team: React.ReactNode;
  user: React.ReactNode;
};

export default function Layout({ children, team, user }: Props) {
  return (
    <>
      <h1>Test</h1>
      {children}
      {team}
      {user}
    </>
  );
}
