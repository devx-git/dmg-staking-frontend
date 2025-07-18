// frontend/components/Footer.js
import Image from 'next/image';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <p>&copy; {new Date().getFullYear()} Digital Market Group. Todos los derechos reservados.</p>
        
        <div className={styles.socialIcons}>
          {/* --- ICONOS ACTIVOS --- */}
          <a href="https://tiktok.com/@comunidaddmgoficial" target="_blank" rel="noopener noreferrer" title="TikTok">
            <Image src="/icons/tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61577643940515" target="_blank" rel="noopener noreferrer" title="Facebook">
            <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
          </a>
          {/* <a href="https://t.me/tu_canal" target="_blank" rel="noopener noreferrer" title="Telegram">
            <Image src="/icons/telegram.svg" alt="Telegram" width={24} height={24} />
          </a> */}
          <a href="https://whatsapp.com/channel/0029VbB2EUb7oQhdeSbIej2c" target="_blank" rel="noopener noreferrer" title="whatsapp">
            <Image src="/icons/whatsapp.svg" alt="whatsapp" width={24} height={24} />
          </a>

          {/* --- ICONOS COMENTADOS PARA EL FUTURO --- 
              Para activarlos, simplemente quita los símbolos de comentario.
          */}
          {/*
          <a href="https://instagram.com/tu_usuario" target="_blank" rel="noopener noreferrer" title="Instagram">
            <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://x.com/tu_usuario" target="_blank" rel="noopener noreferrer" title="X">
            <Image src="/icons/x.svg" alt="X" width={24} height={24} />
          </a>
          */}
        </div>
      </div>
    </footer>
  );
}