// frontend/components/Footer.js
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Digital Market Group. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}