import React from 'react';
import styles from './DirectWallet.module.scss';
import Image from 'next/legacy/image';
import Button from '../../../Button';
import ConvertCoinCard from '../../../DonateForm/ConvertCoinCard';

type DirectWalletProps = {
    modal: any;
}
const DirectWallet = ({
    modal
}:DirectWalletProps) => {
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
                      Direct Wallet Connect
                    </div>
                    <div className={styles.convertContainer}>
                        <ConvertCoinCard />
                    </div>


                    <div className={styles.accountContainer}>
                        <div className={styles.infoContainer}>
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
                                    0x5m74f46f7b2412e1a78fa9kg6466134fd640kl46
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button 
                                title={'Disconnect'} 
                                min 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DirectWallet