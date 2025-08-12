// frontend/components/PaymentModal.js - VERSIÓN CORREGIDA

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/PaymentModal.module.css';

export default function PaymentModal({ plan, onClose, walletAddress, usdtWalletAddress }) {
  // TODOS LOS HOOKS DEBEN IR AQUÍ, AL PRINCIPIO
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  // La condición va DESPUÉS de todos los hooks
  if (!plan) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Confirma tu participación como: {plan.name}</h2>

        <div className={styles.paymentTabs}>
          <button 
            className={`${styles.tabButton} ${paymentMethod === 'crypto' ? styles.activeTab : ''}`}
            onClick={() => setPaymentMethod('crypto')}>
            Pagar con Cripto (General)
          </button>
          <button 
            className={`${styles.tabButton} ${paymentMethod === 'usdt' ? styles.activeTab : ''}`}
            onClick={() => setPaymentMethod('usdt')}>
            Pagar con USDT
          </button>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.qrCode}>
            {paymentMethod === 'crypto' ? (
              <Image src="/qr-pago.png" alt="Código QR de la billetera" width={200} height={200} />
            ) : (
              <Image src="/qr-pago-usdt.png" alt="Código QR de la billetera USDT" width={200} height={200} />
            )}
          </div>
          <div className={styles.paymentInfo}>
            <div className={styles.infoItem}>
              <span>Cantidad a Enviar:</span>
              <strong className={styles.amount}>{plan.price} USD</strong>
            </div>
            {paymentMethod === 'crypto' ? (
              <div className={styles.infoItem}>
                <span>Red Recomendada:</span>
                <strong>Polygon / BSC / ETH</strong>
              </div>
            ) : (
              <div className={styles.infoItem}>
                <span>Red (¡Importante!):</span>
                <strong className={styles.networkWarning}>Polygon (MATIC)</strong>
              </div>
            )}
            <div className={styles.infoItem}>
              <span>Dirección de la Billetera:</span>
              <input type="text" value={paymentMethod === 'crypto' ? walletAddress : usdtWalletAddress} readOnly />
              <button onClick={() => navigator.clipboard.writeText(paymentMethod === 'crypto' ? walletAddress : usdtWalletAddress)}>Copiar</button>
            </div>
          </div>
        </div>
        <p className={styles.warning}>
          {paymentMethod === 'usdt' && 'Asegúrate de enviar solo USDT en la red Polygon. Enviar otra moneda o usar otra red puede resultar en la pérdida de tus fondos. '}
          Una vez realizado el pago, contacta al soporte para la asignación de tus tokens DMG.
        </p>
      </div>
    </div>
  );
}