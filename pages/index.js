// frontend/pages/index.js
import Head from "next/head";
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import Image from "next/image";

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

         {/* --- NUEVA SECCIÓN: TUTORIAL INTERACTIVO --- */}
          <section className={styles.tutorialSection}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Comienza en el Mundo Cripto en 4 Pasos</h2>
              <p className={styles.sectionSubtitle}>
                Interactuar con nuestra plataforma es fácil y seguro. Sigue esta guía para tener todo listo en minutos.
              </p>
              <div className={styles.tutorialGrid}>

                {/* Paso 1: Instalar MetaMask */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step1.png" alt="Instalar MetaMask" width={80} height={80} />
                  <h3>1. Instala tu Billetera</h3>
                  <p>MetaMask es tu pasaporte al mundo Web3. Es una billetera segura donde guardarás tus DMG. Descárgala como extensión para tu navegador.</p>
                  <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Descargar MetaMask →
                  </a>
                </div>

                {/* Paso 2: Configurar Red Polygon */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step2.png" alt="Configurar Polygon" width={80} height={80} />
                  <h3>2. Configura la Red Polygon</h3>
                  <p>Nuestra plataforma opera en la red Polygon para que tus transacciones sean rápidas y económicas. Agrégala a tu MetaMask con un solo clic.</p>
                  <a href="https://chainlist.org/chain/137" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Añadir Red Polygon →
                  </a>
                </div>

                {/* Paso 3: Obtener MATIC */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step3.png" alt="Comprar MATIC" width={80} height={80} />
                  <h3>3. Obtén MATIC</h3>
                  <p>Necesitarás MATIC, la moneda nativa de Polygon, para pagar las pequeñas comisiones de la red (&quot;Gas&quot;). Puedes comprarlo en un exchange seguro.</p>
                  <a href="https://www.coinbase.com/price/polygon" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Comprar MATIC →
                  </a>
                </div>

                {/* Paso 4: Comprar DMG */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step4.png" alt="Comprar DMG" width={80} height={80} />
                  <h3>4. Compra DMG</h3>
                  <p>¡Ya estás listo! Ahora puedes intercambiar tus MATIC por nuestros tokens DMG en un exchange descentralizado y empezar a hacer staking.</p>
                  <a href="https://quickswap.exchange/#/swap" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Comprar DMG en QuickSwap →
                  </a>
                </div>

                 {/* Paso 5: Cómo Hacer Staking */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step5.png" alt="Haz Staking con DMG" width={80} height={80} />
                  <h3>5. Haz Staking con tus DMG</h3>
                  <p>Una vez que tengas DMG, ve a nuestra dApp. El proceso es simple: aprueba el contrato y deposita tus tokens para empezar a ver crecer tus recompensas al instante.</p>
                  {/* Usamos <Link> para enlaces internos */}
                  <Link href="/staking" className={styles.tutorialLink}>
                    Ir a la dApp de Staking →
                  </Link>
                </div>

                {/* Paso 6: Seguridad y Confianza */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step6.png" alt="Inversión Segura" width={80} height={80} />
                  <h3>6. Relájate y Disfruta</h3>
                  <p>Tu inversión está segura en nuestros contratos inteligentes auditados y siempre bajo tu control. Únete a la comunidad mientras tus activos trabajan para ti.</p>
                  <a href="https://t.me/tu_canal" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Unirse a la Comunidad →
                  </a>
                </div>

              </div>
            </div>
          </section>
          {/* --- FIN DEL TUTORIAL --- */}

         {/* --- NUEVA SECCIÓN: LLAMADA A LA ACCIÓN (BÓVEDA) --- */}
        <section className={styles.ctaSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Presentamos la Bóveda DMG</h2>
            <p className={styles.ctaSubtitle}>
              Más allá del staking, nuestra Bóveda te ofrece un ecosistema completo para gestionar tus activos digitales. Regístrate para acceder a herramientas exclusivas, análisis de portafolio y nuevas oportunidades de rentabilidad, todo con la máxima seguridad.
            </p>
            {/* Usamos una etiqueta <a> para enlaces externos */}
            <a 
              href="https://boveda.dmgcripto.com/login" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Acceder a la Bóveda
            </a>
          </div>
        </section>
        {/* --- FIN DE LA NUEVA SECCIÓN --- */}

        {/* --- NUEVA SECCIÓN: TUTORIAL INTERACTIVO --- */}
          <section className={styles.tutorialSection}>
            <div className="container">
              <h2 className={styles.sectionTitle}>Conéctate a la Bóveda DMG: Tu Ruta al Éxito Cripto</h2>
              <p className={styles.sectionSubtitle}>
                Accede a tu cuenta, gestiona tus inversiones y explora el mundo de los criptoactivos con nuestra plataforma segura e intuitiva.
              </p>
              <div className={styles.tutorialGrid}>

                {/* Paso 1: Inicio de Sesión / Registro */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step7.png" alt="Inicio de Sesión" width={80} height={80} />
                  <h3>1.  Accede o Regístrate</h3>
                  <p>Si ya tienes credenciales, inicia sesión. ¿Eres nuevo? Regístrate para ser un socio fundador de DMG y comienza tu viaje.</p>
                  <a href="https://boveda.dmgcripto.com/login" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Ir a Iniciar Sesión →
                  </a>
                </div>

                {/* Paso 2: Actualizar Perfil */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step8.png" alt="Actualizar Perfil" width={80} height={80} />
                  <h3>2. Actualiza tu Perfil</h3>
                  <p>Valida tus datos y personaliza tu cuenta. Sube tu foto de perfil o elige un avatar para identificarte en la comunidad.</p>
                  <a href="https://boveda.dmgcripto.com/perfil" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Editar Perfil →
                  </a>
                </div>

                {/* Paso 3: Configurar Medio de Pago */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step9.PNG" alt="Configurar Medio de Pago" width={80} height={80} />
                  <h3>3. Configura tu Billetera</h3>
                  <p>Agrega los datos de tu billetera cripto o medio de pago preferido para realizar transacciones de forma segura en la plataforma.</p>
                  <a href="https://boveda.dmgcripto.com/metodo_pago" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Añadir Medio de Pago →
                  </a>
                </div>

                {/* Paso 4: Elegir Plan de Socio Inversionista */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step10.PNG" alt="Elegir Plan de Socio Inversionista" width={80} height={80} />
                  <h3>4.  Elige tu Plan de Socio</h3>
                  <p>Explora nuestros planes diseñados para socios inversionistas. Selecciona el que mejor se adapte a tus objetivos financieros.</p>
                  <a href="https://boveda.dmgcripto.com/lista_inversion" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Ver Planes →
                  </a>
                </div>

                 {/* Paso 5: Comprar Plan y Confirmación */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step11.PNG" alt="Comprar Plan y Confirmación" width={80} height={80} />
                  <h3>5. Compra y Confirma</h3>
                  <p>Adquiere tu plan y sigue los pasos para el pago. Nuestro equipo confirmará tu transacción para activar tu membresía.</p>
                  {/* Usamos <Link> para enlaces internos */}
                  <Link href="https://boveda.dmgcripto.com/seleccion_inversion_view/Mzg=" className={styles.tutorialLink}>
                    Estado de Compra →
                  </Link>
                </div>

                {/* Paso 6: Acceder a Cursos de Criptoactivos */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step12.PNG" alt="Acceder a Cursos de Criptoactivos" width={80} height={80} />
                  <h3>6. Explora Nuestros Cursos</h3>
                  <p>Una vez activo tu plan o al adquirir tokens DMG, accede a una biblioteca de cursos sobre criptoactivos a precios exclusivos.</p>
                  <a href="https://boveda.dmgcripto.com/historial_curso" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Ir a Cursos Cripto →
                  </a>
                </div>

                 {/* --- Nueva Sección: Enlace al Manual Detallado --- */}
                    <div className={styles.manualSection}>
                      <p className={styles.manualText}>
                        ¿Necesitas una guía más exhaustiva? Descarga nuestro manual completo con todos los detalles y consejos para aprovechar al máximo la Bóveda DMG.
                      </p>
                      <a href="/manuals/manual-boveda-dmg.pdf" target="_blank" rel="noopener noreferrer" className={styles.manualLink}>
                        Descargar Manual Completo (PDF)
                      </a>
                    </div>
                  {/* --- Fin Nueva Sección --- */}

                  {/* --- Nueva Sección: Enlace al Manual Detallado --- */}
                    <div className={styles.manualSection}>
                      <p className={styles.manualText}>
                        ¿Quieres dominar el Staking de DMG? Descarga nuestro manual detallado con todos los pasos, consejos y estrategias para optimizar tus recompensas.
                      </p>
                      <a href="/manuals/manual-staking-dmg.pdf" target="_blank" rel="noopener noreferrer" className={styles.manualLink}>
                        Descargar Manual de Staking (PDF)
                      </a>
                    </div>
                  {/* --- Fin Nueva Sección --- */}

              </div>
            </div>
          </section>
          {/* --- FIN DEL TUTORIAL --- */}
      </div>
    </>
  );
}