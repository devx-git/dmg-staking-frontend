// frontend/pages/gestion-admin-dmg.js - VERSIÓN CON ESTADÍSTICAS

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';
import ConnectWalletButton from '../components/ConnectWalletButton';
import styles from '@/styles/AdminPage.module.css'; // Usaremos estilos específicos

// ¡IMPORTANTE! Pega las direcciones y ABIs de tus contratos
const tokenAddress = "0x87C67043857733727B2797Bfa3637DF634Fb4514";
const stakingAddress = "0x6163766864F4D152193448ce95C397AA00332068";
const tokenABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const stakingABI = [{"inputs":[{"internalType":"address","name":"_stakingTokenAddress","type":"address"},{"internalType":"address","name":"_rewardsTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}];

export default function AdminPage() {
    const [account, setAccount] = useState(null);
    const [stakingContract, setStakingContract] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [newRate, setNewRate] = useState("");
    const [message, setMessage] = useState("");

    // Nuevos estados para las estadísticas
    const [totalStaked, setTotalStaked] = useState("0");
    const [rewardRate, setRewardRate] = useState("0");
    const [contractBalance, setContractBalance] = useState("0");

    const connectAndLoadData = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const userAccount = await signer.getAddress();
            setAccount(userAccount);

            // Usamos el provider para leer datos públicos sin necesidad de firmar
            const publicStakingContract = new ethers.Contract(stakingAddress, stakingABI, provider);
            const owner = await publicStakingContract.owner();
            if (userAccount.toLowerCase() === owner.toLowerCase()) {
                setIsOwner(true);
                // Si es el dueño, el contrato necesita el signer para enviar transacciones
                const contractWithSigner = publicStakingContract.connect(signer);
                setStakingContract(contractWithSigner);
            }

            // Cargar datos de estadísticas
            const tokenContract = new ethers.Contract(tokenAddress, tokenABI, provider);
            setTotalStaked(ethers.formatEther(await publicStakingContract.totalStaked()));
            setRewardRate(ethers.formatEther(await publicStakingContract.rewardRate()));
            setContractBalance(ethers.formatEther(await tokenContract.balanceOf(stakingAddress)));
        }
    };

    const handleSetRate = async () => {
        if (!newRate || isNaN(newRate) || !stakingContract) return;
        setMessage("Enviando transacción...");
        try {
            const rateInWei = ethers.parseUnits(newRate, "ether");
            const tx = await stakingContract.setRewardRate(rateInWei);
            await tx.wait();
            setMessage("¡Tasa de recompensa actualizada con éxito!");
            setRewardRate(newRate); // Actualiza la UI inmediatamente
        } catch (error) {
            console.error(error);
            setMessage(`Error: ${error.reason || "Error desconocido"}`);
        }
    };

    return (
        <div className="container">
            <h1>Dashboard del Protocolo</h1>

            {/* Sección de Estadísticas (Pública) */}
            <div className={styles.statsGrid}>
                <div className={styles.statCard}>
                    <h4>Total en Staking</h4>
                    <p>{parseFloat(totalStaked).toFixed(2)} DMG</p>
                </div>
                <div className={styles.statCard}>
                    <h4>Recompensas por Segundo</h4>
                    <p>{parseFloat(rewardRate).toFixed(6)} DMG</p>
                </div>
                <div className={styles.statCard}>
                    <h4>Reservas del Contrato</h4>
                    <p>{parseFloat(contractBalance).toFixed(2)} DMG</p>
                </div>
            </div>

            {!account ? (
                <div className={styles.connectPrompt}>
                    <p>Conecta tu billetera para ver los controles de administrador.</p>
                    <ConnectWalletButton onClick={connectAndLoadData} account={null} />
                </div>
            ) : (
                isOwner && (
                    <div className={styles.adminControls}>
                        <h3>Controles de Administrador</h3>
                        <p>Establece la nueva cantidad de tokens a distribuir por segundo.</p>
                        <div className="action-box">
                            <div data-tooltip="Define la cantidad de DMG a distribuir por segundo como recompensa.">
                            <input
                                type="text"
                                value={newRate}
                                onChange={(e) => setNewRate(e.target.value)}
                                placeholder="Ej: 0.1 (distribuirá 0.1 DMG por segundo)"
                                
                            />
                             </div>
                            <button onClick={handleSetRate} 
                            className="btn-stake" 
                            data-tooltip="Guarda la nueva tasa de recompensas en la blockchain (requiere gas).">Actualizar Tasa</button>
                        </div>
                        {message && <p className="message">{message}</p>}
                    </div>
                )
            )}
             <div className={styles.backLink}>
                <Link href="/staking">← Volver al Panel de Staking</Link>
            </div>
        </div>
    );
}