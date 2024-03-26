import styles from '../modal.module.css';
import Image from 'next/image';
import CloseButton from '@/components/CloseButton';
type Params = {
  params: {
    slug: string;
  };
};
export default async function ProductDetailModal({ params: { slug } }: Params) {
  const product: Product = await fetch(`https://dummyjson.com/products/${slug}`).then(resp =>
    resp.json()
  );
  return (
    <div className={styles.container}>
      <div className={styles.imageSlider}>
        <Image
          width={100}
          height={100}
          src={product?.images[product.images.length - 1]}
          alt={`Product Image`}
        />
      </div>
      <div className={styles.infoSection}>
        <h2 className={styles.title}>{product.title}</h2>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.price}>
          ${product.price}{' '}
          <span className={styles.discount}>{product.discountPercentage}% Off</span>
        </div>
        <div className={styles.ratingStock}>
          Rating: <span className={styles.rating}>{product.rating}</span> | Stock:{' '}
          <span className={styles.stock}>{product.stock}</span>
        </div>
        <div className={styles.brandCategory}>
          Brand: <span className={styles.brand}>{product.brand}</span> | Category:{' '}
          <span className={styles.category}>{product.category}</span>
        </div>
      </div>
      <CloseButton />
    </div>
  );
}
