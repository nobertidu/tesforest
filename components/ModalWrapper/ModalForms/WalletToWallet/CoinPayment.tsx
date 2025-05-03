import React from 'react';
import styles from './WalletToWallet.module.scss';

type CoinPaymentProps = {
    data: any;
}
const CoinPayment = ({
    data
}:CoinPaymentProps) => {
  return (
    <div className={styles.containerCoinPayment}>
        <div className={styles.sendDonationCoinPayment}>
            <div className={styles.textCoinPayment}>
                <div className={styles.titleCoinPayment}>
                    Send Donation
                </div>
                <div className={styles.descriptionCoinPayment}>
                    {data.description}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinPayment