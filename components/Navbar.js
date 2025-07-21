// frontend/components/Navbar.js
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <img
            src="/images/dmg-logo.png" // Ruta relativa a la carpeta 'public' o un placeholder
            alt="DMG Logo" // Texto alternativo para accesibilidad
            width={70} // Ancho deseado de tu logo
            height={50} // Alto deseado de tu logo
            style={{ marginRight: '10px' }} // Espaciado a la derecha del logo
          />
        </Link>
        <div className={styles.navLinks}>
          <Link href="/">Inicio</Link>
          <Link href="/staking">Staking dApp</Link>
        </div>
      </div>
    </nav>
  );
}