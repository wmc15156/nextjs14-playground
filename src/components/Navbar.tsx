import styles from './Navbar.module.css';
import LoginText from '@/components/LoginText';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>MyApp</div>
      <ul className={styles.navLinks}>
        <li>
          <a href='/products'>Products</a>
        </li>
        <li>
          <a href='/profile'>Profile</a>
        </li>
        <div className={styles.userSection}>
          <LoginText />
          <li>{/*<img src='/user-image.jpg' alt='User' className={styles.userImage} />*/}</li>
        </div>
      </ul>
    </nav>
  );
}
