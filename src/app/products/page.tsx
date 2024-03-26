import styles from './product.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/config';
export default async function ProductsPage() {
  const getAllPosts: { products: Product[] } = await fetch('https://dummyjson.com/products').then(
    resp => resp.json()
  );
  const session = await getServerSession(authOptions);
  // const { data: session } = useSession();
  console.log(session, 'session22');

  return (
    <div className={styles.productsContainer}>
      {getAllPosts.products.map(product => (
        <div key={product.id} className={styles.productCard}>
          <Link href={`/products/${product.id}`}>
            <Image
              width={100}
              height={100}
              src={product.thumbnail}
              alt={product.title}
              className={styles.productImage}
            />
            <div className={styles.productContent}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <p className={styles.productPrice}>${product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
