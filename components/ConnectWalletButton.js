// frontend/components/ConnectWalletButton.js
import Image from 'next/image';
import styles from '@/styles/ConnectWalletButton.module.css';

export default function ConnectWalletButton({ onClick, account }) {
  if (account) {
    return (
      <div className={styles.connectedWallet}>
        Conectado: {account.substring(0, 6)}...{account.substring(38)}
      </div>
    );
  }

  return (
    <button onClick={onClick} className={styles.connectButton}>
      <Image src="/metamask-fox.svg" alt="MetaMask Fox" width={24} height={24} />
      <span>Conectar Cartera</span>
    </button>
  );
}