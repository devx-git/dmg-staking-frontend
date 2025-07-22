// frontend/components/PaymentModal.js
import Image from 'next/image';
import styles from '@/styles/PaymentModal.module.css';

export default function PaymentModal({ plan, onClose, walletAddress }) {
  if (!plan) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Completa tu Inversión</h2>
        <p>Para unirte al plan <strong>{plan.name}</strong>, envía la cantidad exacta a la siguiente dirección.</p>

        <div className={styles.paymentDetails}>
          <div className={styles.qrCode}>
            <Image src="/qr-pago.png" alt="Código QR de la billetera" width={200} height={200} />
          </div>
          <div className={styles.paymentInfo}>
            <div className={styles.infoItem}>
              <span>Plan:</span>
              <strong>{plan.name}</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Cantidad a Enviar:</span>
              <strong className={styles.amount}>{plan.price} USD</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Red Recomendada:</span>
              <strong>Polygon</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Dirección de la Billetera:</span>
              <input type="text" value={walletAddress} readOnly />
              <button onClick={() => navigator.clipboard.writeText(walletAddress)}>Copiar</button>
            </div>
          </div>
        </div>
        <p className={styles.warning}>
          Asegúrate de enviar los fondos a través de una red compatible como Polygon. 
          Una vez realizado el pago, contacta al soporte para la asignación de tus tokens DMG.
        </p>
      </div>
    </div>
  );
}