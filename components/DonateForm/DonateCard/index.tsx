import { useContext, useState } from 'react';
import ModalContext from '../../../contexts/modalContext';
import ModalWindow from '../../ModalWrapper/ModalForms/PaymentMethod';
import ModalWrapper from '../../ModalWrapper';
import styles from './DonateCard.module.scss';

interface IDonateData {
    title: string;
    donateOptions: any;
    walletOption: string;
    type: any;
}
type DonateCardProps = {
    donateData: IDonateData;
}
const DonateCard = ({
    donateData
}: DonateCardProps) => {
    const { title, donateOptions, walletOption, type } = donateData;

    const modal: any = useContext(ModalContext);

    const handleClick = () => {
        modal.setIsActive(true);
        modal.setActiveContentType(type);
    }
    return (
        <>
            <div
                className={styles.container}
                onClick={handleClick}
            >
                <div className={styles.headlineContainer}>
                    <div>DONATE BY</div>
                    <div>{title}</div>
                </div>
                <div className={styles.donationContainer}>
                    {donateOptions.map((item: any, i: any) => {
                        return (
                            <div key={`donateOptions-${i}`}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
                <div className={styles.walletContainer}>
                    {walletOption}
                </div>
            </div>
            {modal.isActive && (
                <ModalWrapper modal={modal} />
            )}
        </>
    )
}

export default DonateCard;