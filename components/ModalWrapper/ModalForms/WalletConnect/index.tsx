import styles from './WalletConnect.module.scss';
import Image from 'next/legacy/image';

type WalletConnectProps = {
    data: any;
    modal: any;
}
const WalletConnect = ({
    data,
    modal
}: WalletConnectProps) => {
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
                        {data.subTitle}
                    </div>
                    <div className={styles.headlineContainer}>
                        {data.title}
                    </div>
                    <div className={styles.gridImageContainer}>
                        {data.connectWith.map((item: any, i: any) => {
                            return (
                                <div 
                                    className={styles.imageContainer} 
                                    key={`connectWith-${i}`}
                                    onClick={() => modal.setActiveContentType(item.type)}
                                >
                                    <Image
                                        src={item.src}
                                        width={80}
                                        height={74}
                                        alt={`connectWith`}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletConnect;