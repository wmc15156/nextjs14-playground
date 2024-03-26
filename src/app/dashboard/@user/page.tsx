import { fetchData } from '@/lib';

export default async function UserPage() {
  await fetchData(3000);
  return <h1>User Page</h1>;
}
