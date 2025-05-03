import * as React from 'react';
import styles from './Web3Connect.module.scss';
import Image from 'next/legacy/image';
//import { useWeb3Context } from './Web3Context';
import WalletConnectProvider from '@walletconnect/web3-provider';
//import { networkConfig } from '../config/networks.js';
import { useEthers } from '@usedapp/core';
import { PopUpTypes } from '../../../../../utils/donateFormData';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';

export interface IWeb3ConnectProps {
    item: any;
    setActiveContentType: (type: number) => void;
    i: number;
    handleConnect: () => Promise<void>;
    handleConnectMobile: () => Promise<void>;
    // setAccountAddress: (address: string | null) => void;
    // setWeb3Modal: (web3Modal: Web3Modal | null) => void;
    // setWeb3ModalProvider: (provider: ethers.providers.Web3Provider | null) => void;
    // web3ModalProvider: ethers.providers.Web3Provider;
};


const Web3Connect: React.FC<IWeb3ConnectProps> = ({ item, setActiveContentType, i, handleConnect, handleConnectMobile }) => {
    const { account, activate, activateBrowserWallet } = useEthers();   

    const handleClick = async () => {
        if (item.type === PopUpTypes.MetaMask) {
            
            try{ 
                await handleConnect();
                setActiveContentType(PopUpTypes.MetaMask);
            } catch (error) {
                console.error(error);
            }
        }
        if (item.type === PopUpTypes.TrustWallet) {
            try{ 
                const provider = new WalletConnectProvider({
                    rpc:{
                        56: 'https://bsc-dataseed1.binance.org'
                    } ,
                    qrcodeModalOptions: {
                        desktopLinks: [
                          'trust'
                        ],
                        mobileLinks: [
                          'trust'
                        ],
                    },
                    
                })
                await provider.enable()
                await activate(provider)
                  
                setActiveContentType(PopUpTypes.TrustWallet);
            } catch (error) {
                console.error(error);
            }
        }
    }

    return (
        <div
            className={styles.imageContainer}
            key={`connectWith-${i}`}
            onClick={handleClick}

        >
            <Image
                src={item.src}
                width={80}
                height={74}
                alt={`connectWith`}
            />
        </div>
    );
};

export default Web3Connect;