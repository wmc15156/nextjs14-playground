import styles from './DetailProductPage.module.css';

type Params = {
  params: {
    slug: string;
  };
};
export default async function DetailProductPage({ params: { slug } }: Params) {
  const product: Product = await fetch(`https://dummyjson.com/products/${slug}`).then(resp =>
    resp.json()
  );
  return (
    <div className={styles.container}>
      <div className={styles.imageSlider}>
        <img src={product?.images[product.images.length - 1]} alt={`Product Image`} />
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
    </div>
  );
}

// 빌드 타임에 해당 페이지를 만들어 놓음(generateStaticParams)
export async function generateStaticParams() {
  const products: { products: Product[] } = await fetch('https://dummyjson.com/products').then(
    resp => resp.json()
  );

  return products.products.map(product => ({ slug: String(product.id) }));
}
