// frontend/pages/index.js
import Head from "next/head";
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Market Group (DMG) | Staking y Finanzas Descentralizadas</title>
        <meta name="description" content="Genera recompensas pasivas y participa en el futuro de las finanzas con el staking de DMG." />
      </Head>

      <div className={styles.homeContainer}>
        {/* Sección del Héroe */}
        <header className={styles.hero}>
          <div className="container">
            <h1 className={styles.heroTitle}>Haz Crecer tu Inversión con <span className={styles.highlight}>DMG</span></h1>
            <p className={styles.heroSubtitle}>
              Bienvenido a Digital Market Group. Bloquea tus tokens DMG en nuestro contrato de staking seguro y obtén recompensas pasivas por apoyar nuestra red.
            </p>
            <Link href="/staking" className="btn btn-primary">
              Ir a la dApp de Staking
            </Link>
          </div>
        </header>

        {/* Sección de Características */}
        <section className={styles.features}>
          <div className="container">
            <h2 className={styles.sectionTitle}>¿Por Qué Hacer Staking con DMG?</h2>
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <h3>🏆 Gana Recompensas</h3>
                <p>Obtén un rendimiento sobre tus tokens DMG simplemente por mantenerlos en staking. Es la forma más inteligente de aumentar tu capital.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>🔒 Seguridad y Control</h3>
                <p>Nuestros contratos son seguros y auditados. Tú siempre mantienes el control de tus fondos a través de tu propia billetera sin custodia.</p>
              </div>
              <div className={styles.featureCard}>
                <h3>🗳️ Participa en el Futuro</h3>
                <p>Al hacer staking, no solo ganas recompensas, sino que también contribuyes a la estabilidad y gobernanza del ecosistema DMG.</p>
              </div>
            </div>
          </div>
        </section>
         {/* --- NUEVA SECCIÓN: LLAMADA A LA ACCIÓN (BÓVEDA) --- */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Presentamos la Bóveda DMG</h2>
            <p className={styles.ctaSubtitle}>
              Más allá del staking, nuestra Bóveda te ofrece un ecosistema completo para gestionar tus activos digitales. Regístrate para acceder a herramientas exclusivas, análisis de portafolio y nuevas oportunidades de rentabilidad, todo con la máxima seguridad.
            </p>
            {/* Usamos una etiqueta <a> para enlaces externos */}
            <a 
              href="https://sandybrown-stingray-626898.hostingersite.com/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Acceder a la Bóveda
            </a>
          </div>
        </section>
        {/* --- FIN DE LA NUEVA SECCIÓN --- */}
      </div>
    </>
  );
}