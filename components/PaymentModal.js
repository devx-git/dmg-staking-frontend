// frontend/components/PaymentModal.js
import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/PaymentModal.module.css';

export default function PaymentModal({ 
    plan, 
    onClose, 
    walletAddress, 
    usdtWalletAddress,
    nequiPhone, // Nuevo prop
    daviplataPhone // Nuevo prop
}) {
  const [paymentMethod, setPaymentMethod] = useState('crypto');

  if (!plan) return null;

  // Objeto para manejar la información de forma dinámica
  const paymentData = {
    crypto: { qr: '/qr-pago.png', address: walletAddress, network: 'Polygon / BSC / ETH' },
    usdt: { qr: '/qr-pago-usdt.png', address: usdtWalletAddress, network: 'Polygon (MATIC)', networkClass: styles.networkWarning },
    nequi: { qr: '/qr-pago-nequi.png', address: nequiPhone, network: 'Nequi' },
    daviplata: { qr: '/qr-pago-daviplata.png', address: daviplataPhone, network: 'DaviPlata' },
  };

  const currentPayment = paymentData[paymentMethod];

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2>Confirma tu participación como: {plan.name}</h2>

        <div className={styles.paymentTabs}>
          <button className={`${styles.tabButton} ${paymentMethod === 'crypto' ? styles.activeTab : ''}`} onClick={() => setPaymentMethod('crypto')}>Cripto</button>
          <button className={`${styles.tabButton} ${paymentMethod === 'usdt' ? styles.activeTab : ''}`} onClick={() => setPaymentMethod('usdt')}>USDT</button>
          <button className={`${styles.tabButton} ${paymentMethod === 'nequi' ? styles.activeTab : ''}`} onClick={() => setPaymentMethod('nequi')}>Nequi</button>
          <button className={`${styles.tabButton} ${paymentMethod === 'daviplata' ? styles.activeTab : ''}`} onClick={() => setPaymentMethod('daviplata')}>DaviPlata</button>
        </div>

        <div className={styles.paymentDetails}>
          <div className={styles.qrCode}>
            <Image src={currentPayment.qr} alt={`Código QR para ${currentPayment.network}`} width={200} height={200} />
          </div>
          <div className={styles.paymentInfo}>
            <div className={styles.infoItem}>
              <span>Cantidad a Enviar:</span>
              <strong className={styles.amount}>{plan.price} USD</strong>
            </div>
            <div className={styles.infoItem}>
              <span>Red / Método:</span>
              <strong className={currentPayment.networkClass || ''}>{currentPayment.network}</strong>
            </div>
            <div className={styles.infoItem}>
              <span>{paymentMethod.includes('cripto') || paymentMethod.includes('usdt') ? 'Dirección' : 'Número de Teléfono'}:</span>
              <input type="text" value={currentPayment.address} readOnly />
              <button onClick={() => navigator.clipboard.writeText(currentPayment.address)}>Copiar</button>
            </div>
          </div>
        </div>
        <p className={styles.warning}>
          Asegúrate de enviar la cantidad correcta a la dirección indicada. Una vez realizado el pago, contacta al soporte para la asignación de tus tokens DMG.
        </p>
      </div>
    </div>
  );
}