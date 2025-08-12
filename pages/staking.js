// frontend/pages/staking.js - VERSIÓN FINAL CON DIRECCIONES CORRECTAS
// frontend/pages/staking.js - VERSIÓN CON INDICADOR DE RED

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import StakingUI from '../components/StakingUI';
import ConnectWalletButton from '../components/ConnectWalletButton'; // <- 1. Importar el nuevo botón


// --- CONFIGURACIÓN CON LAS DIRECCIONES DE TU ÚLTIMO DESPLIEGUE ---

const tokenAddress = "0x87C67043857733727B2797Bfa3637DF634Fb4514"; 
const stakingAddress = "0x6163766864F4D152193448ce95C397AA00332068";

const tokenABI = [{"inputs":[{"internalType":"address","name":"initialOwner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const stakingABI = [{"inputs":[{"internalType":"address","name":"_stakingTokenAddress","type":"address"},{"internalType":"address","name":"_rewardsTokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Unstaked","type":"event"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerTokenStored","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardsToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setRewardRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"stakedBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStaked","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"unstake","outputs":[],"stateMutability":"nonpayable","type":"function"}];

const CORRECT_NETWORK_ID = 137;
// El resto del código no necesita cambios
export default function StakingPage() {
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [account, setAccount] = useState(null);
    const [networkName, setNetworkName] = useState(null); // NUEVA LÍNEA: Estado para el nombre de la red
    const [tokenContract, setTokenContract] = useState(null);
    const [stakingContract, setStakingContract] = useState(null);
    const [userTokenBalance, setUserTokenBalance] = useState("0");
    const [stakedBalance, setStakedBalance] = useState("0");
    const [earnedRewards, setEarnedRewards] = useState("0");
    const [isConnecting, setIsConnecting] = useState(false); 

    const connectWallet = async () => {

        if (isConnecting) 
            return; // <- 3. Prevenir doble clic
            setIsConnecting(true); // <- Bloquear el botón 
         
        if (typeof window.ethereum !== 'undefined') {
            try {
            const web3Provider = new ethers.BrowserProvider(window.ethereum);
            // console.log("Pidiendo cuentas al usuario...");
            setProvider(web3Provider);

            const network = await web3Provider.getNetwork(); // 👈 Aquí defines 'network'
            console.log("Chain ID:", network.chainId.toString()); // 👈 Ahora sí puedes usarla

            let networkDisplayName;
            switch (network.chainId) {
                case 80002n:
                networkDisplayName = "Polygon Amoy";
                break;
                case 137n:
                networkDisplayName = "Polygon Mainnet";
                break;
                default:
                networkDisplayName = `Red Desconocida (${network.chainId})`;
            }
            setNetworkName(networkDisplayName);

            // --- ¡LÓGICA DE VERIFICACIÓN DE RED! ---
                // El 'n' es importante para comparar BigInts
                if (network.chainId !== BigInt(CORRECT_NETWORK_ID)) {
                    alert("Red incorrecta. Por favor, cambia tu red en MetaMask a Polygon Mainnet.");
                    setIsConnecting(false);
                    return; // Detiene la ejecución si la red es incorrecta
                }

            const web3Signer = await web3Provider.getSigner();
            setSigner(web3Signer);

            const userAccount = await web3Signer.getAddress();
            setAccount(userAccount);
            
            const token = new ethers.Contract(tokenAddress, tokenABI, web3Signer);
            setTokenContract(token);
            
            const staking = new ethers.Contract(stakingAddress, stakingABI, web3Signer);
            setStakingContract(staking);

            const owner = await staking.owner();
                if (userAccount.toLowerCase() === owner.toLowerCase()) {
                    setIsOwner(true);
                }

            } catch (error) {
            console.error("Error connecting wallet:", error);
            }
        } else {
            alert("Por favor, instala MetaMask para usar esta dApp.");
        }

        setIsConnecting(false); // <- Desbloquear el botón al finalizar
    };

     // NUEVO useEffect: Escucha los cambios de red en MetaMask
    useEffect(() => {
        if(window.ethereum) {
                window.ethereum.on('chainChanged', () => {
                window.location.reload(); // Recarga la página si el usuario cambia de red
            });
                window.ethereum.on('accountsChanged', () => {
                window.location.reload(); // Recarga la página si el usuario cambia de cuenta
            });
        }
    }, []);

    const updateUserData = async () => {
             
        if (tokenContract && stakingContract && account) {
            try {
                const tokenBal = await tokenContract.balanceOf(account);
                setUserTokenBalance(ethers.formatEther(tokenBal));

                const stakedBal = await stakingContract.stakedBalance(account);
                setStakedBalance(ethers.formatEther(stakedBal));

                const rewards = await stakingContract.earned(account);
                setEarnedRewards(ethers.formatEther(rewards));
            } catch (error) {
                console.error("Error al actualizar los datos del usuario:", error);
            }
        }
    };

        const handleApprove = async () => {
            if (!tokenContract || !stakingAddress || !account) return;

                try {
                    const amount = ethers.parseUnits("1000", 18); // Ajusta según tu lógica
                    const tx = await tokenContract.approve(stakingAddress, amount);
                    await tx.wait();
                    alert("Aprobación completada con éxito.");
                } catch (error) {
                    if (error.code === 4001) {
                    // Código 4001 = usuario rechazó la transacción
                    alert("Cancelaste la transacción en MetaMask.");
                    } else {
                    console.error("Error al aprobar:", error);
                    alert("Ocurrió un error al intentar aprobar el token.");
                    }
            }
        };


    useEffect(() => {
        if (account) {
            updateUserData();
            const interval = setInterval(updateUserData, 10000); 
            return () => clearInterval(interval);
        }
    }, [account, tokenContract, stakingContract, updateUserData]);

    return (
    <div className="container">
        {account ? (
            // Si la cuenta está conectada, muestra la UI de Staking
            <>
                <h1>Panel de Staking de Digital Market Group</h1>
                <StakingUI
                    account={account}
                    networkName={networkName}
                    isOwner={isOwner}
                    userTokenBalance={userTokenBalance}
                    stakedBalance={stakedBalance}
                    earnedRewards={earnedRewards}
                    tokenContract={tokenContract}
                    stakingContract={stakingContract}
                    updateUserData={updateUserData}
                />
            </>
        ) : (
            // Si la cuenta NO está conectada, muestra la bienvenida
            <div className="connect-wallet-view">
               
                <h2>Conecta tu Billetera para Empezar</h2>
                <p>
                    Usa el panel de staking para bloquear tus Digital Market Group y comenzar a ganar recompensas pasivas por apoyar el ecosistema.
                </p>
                <ConnectWalletButton onClick={connectWallet} account={null} />
            </div>
        )}
     </div>
    );
}