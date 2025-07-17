// frontend/components/StakingUI.js

import { useState } from 'react';
import { ethers } from 'ethers';
import Link from 'next/link';

export default function StakingUI({
    account,
    networkName,
    userTokenBalance,
    stakedBalance,
    earnedRewards,
    tokenContract,
    stakingContract,
    isOwner,
    updateUserData
}) {
    const [stakeAmount, setStakeAmount] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleTransaction = async (txFunction, successMessage) => {
        setIsLoading(true);
        setMessage("Procesando transacción...");
        try {
            const tx = await txFunction();
            await tx.wait();
            await updateUserData();
            setMessage(successMessage);
            setStakeAmount("");
        } catch (error) {
            console.error("Error en la transacción:", error);
            setMessage(`Falló la transacción: ${error.reason || "Error desconocido"}`);
        }
        setIsLoading(false);
        setTimeout(() => setMessage(""), 5000);
    };

    const handleApprove = () => {
        if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
            setMessage("Por favor, introduce una cantidad válida.");
            setTimeout(() => setMessage(""), 3000);
            return;
        }
        const amountToApprove = ethers.parseEther(stakeAmount);
        handleTransaction(() => tokenContract.approve(stakingContract.target, amountToApprove), "Aprobación exitosa. ¡Ahora puedes hacer stake!");
    };
    
    const handleStake = () => {
        if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
            setMessage("Por favor, introduce una cantidad válida.");
            setTimeout(() => setMessage(""), 3000);
            return;
        }
        const amountToStake = ethers.parseEther(stakeAmount);
        handleTransaction(() => stakingContract.stake(amountToStake), "¡Stake realizado con éxito!");
    };

    const handleClaim = () => {
        handleTransaction(() => stakingContract.claimReward(), "¡Recompensas reclamadas!");
    };
    
    const handleUnstake = () => {
        if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
            setMessage("Por favor, introduce una cantidad válida para retirar.");
            setTimeout(() => setMessage(""), 3000);
            return;
        }
        const amountToUnstake = ethers.parseEther(stakeAmount);
        handleTransaction(() => stakingContract.unstake(amountToUnstake), "¡Tokens retirados del stake con éxito!");
    };

    return (
        <div className="stakingContainer">
            {/* Columna Izquierda: Información */}
            <div className="stakingInfo">
                <h3>Resumen de tu Cuenta</h3>
                <div className="info-row">
                    <span>🌐 Red Conectada:</span>
                    <span>{networkName || 'Desconocida'}</span>
                </div>
                <div className="info-row">
                    <span>👤 Tu Cartera:</span>
                    <span>{account.substring(0, 6)}...{account.substring(38)}</span>
                </div>
                <div className="info-row">
                    <span>💰 Saldo de DMG:</span>
                    <span>{parseFloat(userTokenBalance).toFixed(4)}</span>
                </div>
                <div className="info-row">
                    <span>🔒 DMG en Staking:</span>
                    <span>{parseFloat(stakedBalance).toFixed(4)}</span>
                </div>
                <div className="info-row">
                    <span>🏆 Recompensas Ganadas:</span>
                    <span>{parseFloat(earnedRewards).toFixed(6)} DMG</span>
                </div>
            </div>

            {/* Columna Derecha: Acciones */}
            <div className="stakingActions">
                <h3>Acciones de Staking</h3>
                <div className="action-box">
                    <input
                        type="number"
                        value={stakeAmount}
                        onChange={(e) => setStakeAmount(e.target.value)}
                        placeholder="Cantidad de DMG"
                        disabled={isLoading}
                    />
                    <div className="button-group">
                        <button onClick={handleApprove} className="btn-approve" data-tooltip="Paso 1: Da permiso al contrato para mover tus DMG." disabled={isLoading || !stakingContract}>1. Aprobar</button>
                        <button onClick={handleStake} className="btn-stake" data-tooltip="Paso 2: Deposita tus DMG para empezar a ganar recompensas." disabled={isLoading || !stakingContract}>2. Hacer Stake</button>
                    </div>
                    <div className="button-group">
                        <button onClick={handleUnstake} className="btn-secondary" data-tooltip="Retira tus DMG depositados de vuelta a tu billetera." disabled={isLoading || !stakingContract}>Retirar Stake</button>
                        <button onClick={handleClaim} className="btn-secondary" data-tooltip="Transfiere las recompensas ganadas a tu billetera." disabled={isLoading || parseFloat(earnedRewards) === 0 || !stakingContract}>Reclamar</button>
                    </div>
                </div>
                {message && <p className="message">{message}</p>}
            </div>
             {isOwner && (
                <div className="admin-button-container">
                    <Link href="/gestion-admin-dmg" className="btn-admin">
                        ⚙️ Ir al Dashboard de Administrador
                    </Link>
                </div>
            )}
        </div>
    );
}