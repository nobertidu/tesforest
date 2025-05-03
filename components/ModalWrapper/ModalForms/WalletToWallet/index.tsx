import React, { useState } from 'react';
import styles from './WalletToWallet.module.scss';
import Image from 'next/legacy/image';
import CoinPayment from './CoinPayment';

type WalletToWalletProps = {
    modal: any;
    coinPaymentData: any;
}
const WalletToWallet = ({
    modal,
    coinPaymentData
}: WalletToWalletProps) => {
    const [activePaymentMethod, setActivePaymentMethod] = useState<number>();
    const [activeStyle, setActiveStyle] = useState<number>();
    const handleClick = (data: any) => {
        setActivePaymentMethod(data);
        setActiveStyle(data);
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
                        donate with
                    </div>
                    <div className={styles.headlineContainer}>
                        wallet to wallet transfer
                    </div>
                    <div className={styles.coinPaymentContainer}>
                        {coinPaymentData.map((item: any, i: any) => {
                            return (
                                <div
                                    className={styles.donationFormContainer}
                                    key={`coinPaymentData-${i}`}
                                >
                                    <div
                                        className={`${styles.coinPaymentMethodContainer} ${activeStyle === item.coinInfo.id ? styles.active : ``}`}
                                        onClick={() => handleClick(item.coinInfo.id)}
                                    >
                                        <div>
                                            <Image
                                                src={item.src}
                                                width={41}
                                                height={41}
                                            />
                                        </div>
                                        <div>
                                            {item.title}
                                        </div>
                                    </div>
                                    <div>
                                        {activePaymentMethod === item.coinInfo.id ? (
                                            <CoinPayment data={item.coinInfo} />
                                        ) : (``)}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    {/* <div className={styles.bottomBorder}></div> */}
                </div>
            </div>
        </div>
    )
}

export default WalletToWallet