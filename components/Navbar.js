// frontend/components/Navbar.js
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          DMG
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/staking">Staking dApp</Link>
        </div>
      </div>
    </nav>
  );
}