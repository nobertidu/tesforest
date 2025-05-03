import React from 'react';
import styles from './InputField.module.scss';

interface IInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    register: any;
    title: string;
    requiredField?: string;
    type?: string;
    placeholder?: string;
    small?: boolean;
    style?: any;
    children?: React.ReactNode;
}
const InputField = React.forwardRef<HTMLInputElement, IInputFieldProps>(
    (
        {
            id,
            register,
            title,
            requiredField,
            type,
            placeholder,
            small = false,
            style,
            children,
            ...restProps
        },
        ref
    ) => {
        return (
            <div 
                className={`${styles.container} ${small ? styles.small : ``}`}
                style={{...style}}>
                <input
                    {...register(title, {
                        required: requiredField
                    })}
                    {...restProps}
                    ref={ref}
                    type={type}
                    placeholder={placeholder}
                />
                {children}
            </div>
        )
    }
)

InputField.displayName = 'InputField';

export default InputField