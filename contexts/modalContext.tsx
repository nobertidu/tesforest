import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import React, { useEffect, useState } from "react";
import { useLockScroll } from "../hooks/useLockScroll";
import { PopUpTypes } from "../utils/donateFormData";
import { ethers } from 'ethers';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { useEthers } from '@usedapp/core';
import { mintABI, MINT_ADDRESS } from "../config/abi/TreesMintABI";

const ModalContext = React.createContext(null);
ModalContext.displayName = 'ModalContext';

const ModalProvider = ({ children }: any) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [trees, setTrees] = useState<any>([]);
    const [activeContenType, setActiveContentType] = useState<PopUpTypes | null>(null);
    const [accountAddress, setAccountAddress] = useState<string | null>(null);
    const [web3Modal, setWeb3Modal] = React.useState<Web3Modal | null>(null);
    const [web3ModalInstance, setWeb3ModalInstance] = React.useState<any>(null);
    const [web3ModalProvider, setWeb3ModalProvider] = React.useState<ethers.providers.Web3Provider | null>(null);
    const [isConnected, setIsConnected] = React.useState<boolean>(false);
    const { account, activate, activateBrowserWallet } = useEthers();

    React.useEffect(() => {
        web3ModalInstance?.on('accountsChanged', handleAccountsChanged);
        return () => {
            web3ModalInstance?.removeListener('accountsChanged', handleAccountsChanged);
        }
    }, [web3ModalInstance]);

    const handleAccountsChanged = async (accounts: string[]) => {
        if (accounts.length > 0) {
            setAccountAddress(accounts[0]);
            if (web3ModalProvider) {
                await getTokenIds(web3ModalProvider);
            }
        } else {
            setIsConnected(false);
        }
    }

    const handleConnectMobile = async () => {

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
        const ethersProvider = new ethers.providers.Web3Provider(provider)
        const signer = ethersProvider.getSigner();
        const signerAddy = await signer.getAddress();
        console.log(signerAddy);
        setAccountAddress(signerAddy);
        setIsConnected(true);
    }

    const handleConnect = async () => {

        const options = new WalletConnectProvider({
            rpc: {
                56: 'https://bsc-dataseed1.binance.org'
            },
            chainId: 56
        });
        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: options
            }
        }
        const web3Modal = new Web3Modal({
            cacheProvider: true,
            providerOptions
        });
        setWeb3Modal(web3Modal);
        const web3ModalInstance = await web3Modal.connect();
        setWeb3ModalInstance(web3ModalInstance);
        const provider = new ethers.providers.Web3Provider(web3ModalInstance);
        setWeb3ModalProvider(provider);
        const signer = provider.getSigner();
        const signerAddy = await signer.getAddress();
        setAccountAddress(signerAddy);
        setIsConnected(true);
    }

    const getTokenIds = async (provider: ethers.providers.Web3Provider) => {
        try {
            const treesResult = [];
            const signer = provider?.getSigner();
    
            const mintContract = new ethers.Contract(MINT_ADDRESS, mintABI, provider);
            const address = await signer.getAddress();
            const balance = await mintContract.balanceOf(address);
            for (let i = 0; i < balance; i++) {
                const id = await mintContract.tokenOfOwnerByIndex(address, i);
                const tree = await mintContract.tokenURI(id);
                const response = await fetch(tree);
                const treeDetails = await response.json();
                treesResult.push(treeDetails);
            }

            setTrees(treesResult);
        } catch (ex) {
            console.error(ex);
        }
    }

    useLockScroll(isActive as any);
    const router = useRouter();
    useEffect(() => {
        setIsActive(false)
    }, [router])
    console.log(activeContenType)
    return (
        <ModalContext.Provider
        // @ts-ignore
            value={{
                isActive,
                setIsActive,
                activeContenType,
                setActiveContentType,
                accountAddress,
                setAccountAddress,
                web3Modal,
                web3ModalProvider,
                handleConnect,
                handleConnectMobile,
                isConnected,
                setIsConnected,
                getTokenIds,
                trees
            }}
        >
            {children}
        </ModalContext.Provider>
    )
}
export { ModalProvider };
export default ModalContext;
