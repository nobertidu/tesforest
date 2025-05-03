import Image from 'next/legacy/image';
import styles from './PaymentMethod.module.scss';

type PaymentMethodProps = {
    data: any;
    modal: any;
}
const PaymentMethod = ({
    data,
    modal
}: PaymentMethodProps) => {
    return (
        <div
            className={`${styles.container} ${modal.isActive 
                ? styles.active
                : ``
            }`}
            onClick={() => modal.setIsActive(false)}
        >
            <div
                className={styles.contentContainer}
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
                    <div className={styles.flexImageContainer}>
                        {data.paymentMethod.map((item: any, i: any) => {
                            return (
                                <div
                                    className={styles.paymentContainer}
                                    onClick={() => modal.setActiveContentType(item.type)}
                                    key={`paymentMethod-${i}`}
                                >
                                    <div className={styles.methodContainer}>
                                        {item.paymentTitle}
                                    </div>
                                    <div className={styles.imageContainer}>
                                        <Image 
                                            src={item.src} 
                                            layout='fill'
                                            alt={`paymentMethod`} />
                                    </div>
                                    <div className={styles.walletContainer}>
                                        {item.walletOption}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentMethod;