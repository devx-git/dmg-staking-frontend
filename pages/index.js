// frontend/pages/index.js
import Head from "next/head";
import Link from 'next/link';
import { useState } from 'react'; // Importar useState
import PaymentModal from '@/components/PaymentModal'; // Importar el Modal
import styles from '@/styles/Home.module.css';
import Image from "next/image";

// Definimos los planes en un array para que sea más fácil de manejar
const plans = [
  { name: 'Socio Fundador', price: 10, days: 365, profit: 100, tokens: 10, featured: false },
  { name: 'Socio Fundador', price: 20, days: 365, profit: 200, tokens: 20, featured: false },
  { name: 'Socio Fundador', price: 50, days: 365, profit: 500, tokens: 50, featured: false },
  { name: 'Socio Fundador', price: 100, days: 365, profit: 1000, tokens: 100, featured: true }, // Plan destacado
  { name: 'Socio Fundador VIP', price: 500, days: 365, profit: 5000, tokens: 500, featured: false },
  { name: 'Socio Fundador VIP Exclusivo', price: 1000, days: 365, profit: 10000, tokens: 1000, featured: false },
];

const YOUR_WALLET_ADDRESS = "19u3LhQXYg5NRkZMQSedyKA4Fi2oki6fgk";
const USDT_WALLET_ADDRESS = "TGDy2zNnDGPyfuXBLLkqsiA9MqXEAYzCLF";
const YOUR_NEQUI_PHONE = "3245471479"; // <-- NUEVA LÍNEA: Reemplaza con tu número
const YOUR_DAVIPLATA_PHONE = "3245471479"; // <-- NUEVA LÍNEA: Reemplaza con tu número

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  

  const handleBuyClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlan(null);
  };
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
            <h1 className={styles.heroTitle}>Construye tu futuro con <span className={styles.highlight}>Digital Market Group</span></h1>
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
            <h2 className={styles.sectionTitle}>Presentamos la Bóveda Digital Market Group</h2>
            <p className={styles.ctaSubtitle}>
              Nuestra Bóveda te ofrece un espacio completo para administrar tus tokens Digital Market Group. Regístrate para acceder a herramientas exclusivas, un análisis detallado de tu participación y oportunidades únicas de crecimiento dentro de la comunidad, todo con la máxima seguridad.
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
              <h2 className={styles.sectionTitle}>Conéctate a la Bóveda Digital Market Group: Tu Ruta al Éxito Cripto</h2>
              <p className={styles.sectionSubtitle}>
              Accede a tu cuenta, gestiona tu membresía y explora los beneficios exclusivos de la comunidad Digital Market Group con nuestra plataforma segura e intuitiva.
              </p>
              <div className={styles.tutorialGrid}>

                {/* Paso 1: Inicio de Sesión / Registro */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step7.png" alt="Inicio de Sesión" width={80} height={80} />
                  <h3>1.  Accede o Regístrate</h3>
                  <p>Si ya tienes credenciales, inicia sesión. ¿Eres nuevo? Regístrate para ser un socio fundador de Digital Market Group y comienza tu viaje.</p>
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
                  <h3>4.  Elige tu membresía de Socio</h3>
                  <p>Explora nuestras membresias diseñados para socios fundadores. Selecciona el que mejor se adapte a tus objetivos financieros.</p>
                  <a href="https://boveda.dmgcripto.com/lista_inversion" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Ver Membresias →
                  </a>
                </div>

                 {/* Paso 5: Comprar Plan y Confirmación */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step11.PNG" alt="Comprar Plan y Confirmación" width={80} height={80} />
                  <h3>5. Compra y Confirma</h3>
                  <p>Adquiere tu membresía y sigue los pasos para el pago. Nuestro equipo confirmará tu transacción para activar tu membresía.</p>
                  {/* Usamos <Link> para enlaces internos */}
                  <Link href="https://boveda.dmgcripto.com/seleccion_inversion_view/Mzg=" className={styles.tutorialLink}>
                    Estado de Compra →
                  </Link>
                </div>

                {/* Paso 6: Acceder a Cursos de Criptoactivos */}
                <div className={styles.tutorialCard}>
                  <Image src="/images/step12.PNG" alt="Acceder a Cursos de Criptoactivos" width={80} height={80} />
                  <h3>6. Explora Nuestros Cursos</h3>
                  <p>Una vez activo tu plan o al adquirir tokens Digital Market Group, accede a una biblioteca de cursos sobre criptoactivos a precios exclusivos.</p>
                  <a href="https://boveda.dmgcripto.com/historial_curso" target="_blank" rel="noopener noreferrer" className={styles.tutorialLink}>
                    Ir a Cursos Cripto →
                  </a>
                </div>

                 {/* --- Nueva Sección: Enlace al Manual Detallado --- */}
                    <div className={styles.manualSection}>
                      <p className={styles.manualText}>
                        ¿Necesitas una guía más exhaustiva? Descarga nuestro manual completo con todos los detalles y consejos para aprovechar al máximo la Bóveda Digital Market Group.
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

                  {/* --- Nueva Sección: Enlace al Manual Detallado celular--- */}
                    <div className={styles.manualSection}>
                      <p className={styles.manualText}>
                        Staking Móvil: Opera Desde tu Celular, Conectate y 
                        gestiona tu staking de Digital Market Group directamente desde la aplicación de MetaMask en tu teléfono. 
                        para una experiencia total,
                        donde sea que estés.
                      </p>
                      <a href="/manuals/manual-stakingMovil-dmg.pdf" target="_blank" rel="noopener noreferrer" className={styles.manualLink}>
                        Descargar Guía Móvil (PDF)
                      </a>
                    </div>
                  {/* --- Fin Nueva Sección --- */}


              </div>
            </div>
          </section>
          {/* --- FIN DEL TUTORIAL --- */}

           
          {/* --- NUEVA SECCIÓN: PLANES DE INVERSIÓN --- */}
        <section className={styles.plansSection}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Elige tu membresía y Conviértete en Parte del Futuro</h2>
            <div className={styles.plansGrid}>
              {plans.map((plan) => (
                <div key={plan.name} className={`${styles.planCard} ${plan.featured ? styles.featuredCard : ''}`}>
                  {plan.featured && <div className={styles.featuredBadge}>Recomendado</div>}
                  <h3>{plan.name}</h3>
                  <p className={styles.planPrice}>{plan.price}<span>/USD</span></p>
                  <ul className={styles.planFeatures}>
                    <li>✓ {plan.tokens} DMG de Bienvenida</li>
                    <li>✓ Puntos fundador: <strong>{plan.profit}</strong></li>
                    <li>✓ Duración: {plan.days} días</li>
                  </ul>
                  <button onClick={() => handleBuyClick(plan)} className="btn btn-primary">
                    Comprar
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* --- FIN DE LA SECCIÓN DE PLANES --- */}

        {/* --- NUEVA SECCIÓN: CONFIANZA Y ECOSISTEMA --- */}
            <section className={styles.trustSection}>
              <div className="container">
                <div className={styles.trustGrid}>
                  
                  <div className={styles.trustCard}>
                    <h3>📄 Contratos Verificados</h3>
                    <p>
                      La transparencia es nuestra prioridad. 
                      El código de nuestros contratos inteligentes es público y ha sido verificado en Polygonscan 
                      para que cualquiera pueda auditarlo.
                    </p>
                    <a 
                      href="https://polygonscan.com/address/0xEC8D9486e63baa2A6c467c204f4aAa9A3f847D7E"  // <-- REEMPLAZA CON EL ENLACE A TU CONTRATO
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.trustLink}>
                      Ver Contrato en Polygonscan →
                    </a>
                  </div>

                  <div className={styles.trustCard}>
                    <h3>🌐 Comunidad Activa</h3>
                    <p>
                      Un proyecto es tan fuerte como su comunidad. 
                      Únete a nuestros canales para estar al día de las últimas noticias, 
                      participar en debates y enterarte del mundo cripto.
                    </p>
                    <a 
                      href="https://t.me/senales_trading_cripto" // <-- REEMPLAZA CON EL ENLACE A TU TELEGRAM
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.trustLink}>
                      Únete a la Comunidad →
                    </a>
                  </div>

                  <div className={styles.trustCard}>
                    <h3>🗺️ Visión y Futuro</h3>
                    <p>
                      Estamos construyendo un ecosistema financiero completo. 
                      Lee nuestro Whitepaper para entender nuestra visión a largo plazo, 
                      la hoja de ruta y los detalles de la tokenomics de Digital Market Group.
                    </p>
                    <a 
                      href="/whitepaper.pdf" // <-- ENLACE A TU FUTURO WHITEPAPER
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={styles.trustLink}>
                      Leer el Whitepaper →
                    </a>
                  </div>

                </div>
              </div>
            </section>
            {/* --- FIN DE LA NUEVA SECCIÓN --- */}

      </div>
      {/* Renderiza el modal si está abierto */}
      {isModalOpen && <PaymentModal plan={selectedPlan} onClose={closeModal} walletAddress={YOUR_WALLET_ADDRESS} usdtWalletAddress={USDT_WALLET_ADDRESS} nequiPhone={YOUR_NEQUI_PHONE} daviplataPhone={YOUR_DAVIPLATA_PHONE} />}
    </>
  );
}