import styles from './ContactUsInputField.module.scss';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Select from 'react-select';
import { dropDownStyles, options, getValue, IOptions } from '../../utils/dropDownSelectData';
import axios from 'axios';
import InputField from '../InputField';

interface IFormFields {
    newname: string;
    name: string;
    email: string;
    message: string;
    selectOptions: any;
}
type ContactUsInputFieldProps = {
    windowDimension: any;
}
const ContactUsInputField = ({
    windowDimension,
}: ContactUsInputFieldProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        control
    } = useForm<IFormFields>({
        mode: `onChange`
    });
    const onSubmit: SubmitHandler<IFormFields> = async (data) => {
        const config = {
            method: `post`,
            url: `/api/contact`,
            data: data
        }
        try {
            let response = await axios(config)
            console.log(data)
            alert(`Succsess!`)
            reset()
        } catch(error) {
            console.log(error)
            alert(`Failure!`)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.container}>
                <input
                    {...register('name', {
                        required: `Name is required!`
                    })}
                    type='textarea'
                    placeholder='Name*'
                    className={styles.inputContainer}
                />
                <input
                    {...register('email', {
                        required: `Email or telegram handle is required!`,
                        // pattern: {
                        //     value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ || /^[1-9][0-9]*([.][0-9]{2}|)$/,
                        //     message: `Please, enter correct Email!`
                        // }
                    })}
                    type='textarea'
                    placeholder='Email address or Telegram handle*'
                    className={styles.inputContainer}
                />
                <textarea
                    {...register('message', {
                        required: `Message is required!`
                    })}
                    placeholder='Message*'
                    className={styles.messageFieldContainer}
                />
                <Controller
                    control={control}
                    name='selectOptions'
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <>
                            <Select
                                options={options}
                                onChange={newValue => onChange((newValue as IOptions).value)}
                                styles={dropDownStyles}
                                value={getValue(value)}
                                placeholder='Select the type'
                            />
                        </>
                    )} 
                />
            </div>
            <button className={`${styles.buttonContainer} ${windowDimension?.width > 755
                ? styles.wide
                : ``
                }`}>
                Send message
            </button>
        </form>
    )
}

export default ContactUsInputField;