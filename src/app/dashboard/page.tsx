import { fetchData } from '@/lib';
import React, { Suspense } from 'react';

async function User() {
  await fetchData(5000);
  return <div>User Data</div>;
}

export default function DashboardPage() {
  return <h1>Dashboard Page</h1>;
}
