import React from 'react'
import styles from './CreditCard.module.scss';
import { SubmitHandler, useForm } from "react-hook-form";
import Image from 'next/legacy/image';
import InputField from '../../../InputField';

interface IFormFields {
    amount: string | number;
    cardNumber: number;
    holderName: string;
    expDate: number;
    securityCode: number;
}
type CreditCardProps = {
    modal: any;
}
const CreditCard = ({
    modal
}: CreditCardProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormFields>({
        mode: `onChange`
    });
    const onSubmit: SubmitHandler<IFormFields> = (data) => {
        console.log(data)
        reset()
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
                        credit card
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={styles.formContainer}>
                            <InputField
                                register={register}
                                title={`amount`}
                                type={`textarea`}
                                placeholder={`Desired amount to donate in USD`}
                            >
                                <div className={styles.usdContainer}>
                                    USD
                                </div>
                            </InputField>
                            <InputField
                                register={register}
                                title={`cardNumber`}
                                type={`textarea`}
                                placeholder={`Card number`}
                            >
                                <div className={styles.creditCardContainer}>
                                    <>
                                        <Image
                                            src={`/common/visaDonateCard.svg`}
                                            width={50}
                                            height={23}
                                        />
                                        <Image
                                            src={`/common/masterCardDonate.svg`}
                                            width={50}
                                            height={23}
                                        />
                                        <Image
                                            src={`/common/amexDonate.svg`}
                                            width={50}
                                            height={23}
                                        />
                                    </>
                                    <Image
                                        src={`/common/lock.svg`}
                                        width={17}
                                        height={20}
                                    />
                                </div>
                            </InputField>
                            <InputField
                                register={register}
                                title={`holderName`}
                                type={`textarea`}
                                placeholder={`Card holder name`}
                            />
                            <div className={styles.cardSecurityCodesContainer}>
                                <InputField
                                    register={register}
                                    title={`expDate`}
                                    type={`textarea`}
                                    placeholder={`Expiration date (MM / YY)`}
                                    small
                                />
                                <InputField
                                    register={register}
                                    title={`securityCode`}
                                    type={`textarea`}
                                    placeholder={`Security code`}
                                    small
                                >
                                    <div className={styles.absoluteImageContainer}>
                                        <Image
                                            src={`/common/questionMark.svg`}
                                            width={20}
                                            height={20}
                                        />
                                    </div>
                                </InputField>
                            </div>
                            <button className={styles.buttonContainer}>
                                DONATE NOW
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreditCard