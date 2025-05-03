import React, { useState } from 'react';
import styles from './MintNft.module.scss';
import Image from 'next/legacy/image';
import Button from '../../../Button';
import { ethers } from 'ethers';
import { mintABI, MINT_ADDRESS } from "../../../../config/abi/TreesMintABI";

type MintNftProps = {
    modal: any;
}

type TransactionMineProps = {
    modal: any;
}

const MintNft = ({
    modal
}:MintNftProps) => {
    const [isMinting, setIsMinting] = React.useState<boolean>(false);
    const [mintQuantity, setMintQuantity] = useState<number>(0);
    const [result, setResult] = React.useState<{ type: "success" | "error", message: string} | null>(null);
    const handleMintQuantity = (isMinus: boolean) => {
        if (isMinus) {
            setMintQuantity((actual: number) => Math.max(actual - 1, 0))
            return
        }
        setMintQuantity((actual: number) => actual + 1)
    }

    const onDisconnect = async () => {
        modal.setAccountAddress(null);
        modal.setIsConnected(false);
    }

    const mint = async (nftCount: number) => {
        try {
            setResult(null);
            setIsMinting(true);
            const provider = modal.web3ModalProvider;
            const signer = provider.getSigner();
     
            const mintContract = new ethers.Contract(MINT_ADDRESS, mintABI, provider);
            const mintPriceInWeiBNB = await mintContract.connect(signer).mintPriceInWeiBNB();
            const totalAmount = mintPriceInWeiBNB * nftCount;
            const formatedAmount = ethers.utils.formatEther(totalAmount.toString());
            const parsedAmount = ethers.utils.parseEther(formatedAmount.toString());
            const tx = await mintContract.connect(signer).mint(nftCount, {value: parsedAmount});
            let receipt = await tx.wait();
            console.log(`transactionResponse - ${receipt}`);
            setIsMinting(false);
            setResult({type: "success", message: "Transaction confirmed"});
        } catch (error) {
            console.error(error);
            setIsMinting(false);
            setResult({type: "error", message: "Transaction failed"});
        }
    }


  return (
    <div
            className={`${styles.container} ${modal.isActive
                ? styles.active
                : ``
                }`}
            onClick={() => modal.setIsActive(false)}
        >
            <div className={styles.contentContainer}
                onClick={(e) => e.stopPropagation()}>
                <div
                    className={styles.closingButtonContainer}
                    onClick={() => modal.setIsActive(false)}
                >
                    <Image
                        src={`/common/closingButton.svg`}
                        width={23}
                        height={23} />
                </div>
                <div className={styles.donationFormContainer}>
                    <div className={styles.subHeadlineContainer}>
                        donate by
                    </div>
                    <div className={styles.headlineContainer}>
                      Minting NFT&apos;s
                    </div>
                    <div className={styles.donateNowContainer}>
                        <div className={styles.counterContainer}>
                            <div 
                                onClick={() => handleMintQuantity(true)}
                                className={styles.counterButtonContainer}
                            >
                                -
                            </div>
                            <div className={styles.mintQuantityContainer}>{mintQuantity}</div>
                            <div 
                                onClick={() => handleMintQuantity(false)}
                                className={styles.counterButtonContainer}
                            >
                                +
                            </div>
                        </div>
                        <div className={styles.totalAmountContainer}>
                            {`Total: ${(mintQuantity * 0.1).toFixed(1)} BNB`}
                        </div>
                        <div onClick={() => (!isMinting && modal.isConnected) && mint(mintQuantity)}>
                            <Button 
                                title={isMinting ? 'MINTING' : 'MINT NOW'}
                                // style={{padding: `1.5rem 6rem`}}
                                style={{ cursor: isMinting || !modal.isConnected ? "default" : "pointer", opacity: isMinting || !modal.isConnected ? '.7' : '1' }}
                            />
                        </div>
                        <div style={{color: result?.type === "error" ? "red" : "green"}}>
                            {result?.message}
                        </div>
                    </div>
                    <div className={styles.accountContainer}>
                        {modal.isConnected && <div className={styles.infoContainer}>
                            <div className={styles.imageContainer}>
                                <Image 
                                    src={`/common/metamaskSvg.svg`} 
                                    width={38}
                                    height={30}
                                />
                            </div>
                            <div>
                                <div className={styles.connectionContainer}>
                                    Connected with the wallet adress:
                                </div>
                                <div className={styles.accountNumberContainer}>
                                    {modal.accountAddress}
                                </div>
                            </div>
                        </div>}
                        <div onClick={() => modal.isConnected ? onDisconnect() : modal.handleConnect()}>
                            <Button 
                                title={modal.isConnected ? 'Disconnect' : 'Connect'} 
                                min
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MintNft