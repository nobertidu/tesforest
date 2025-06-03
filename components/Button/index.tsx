import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
    title: string;
    link?: string;
    min?: boolean;
    style?: React.CSSProperties;
    className?: string;
    primary?: boolean;
    fullWidth?: boolean;
    onClick?: () => void;
};

const Button = ({
    title,
    link,
    min = false,
    style = {},
    className = '',
    primary = false,
    fullWidth = false,
    onClick
}: ButtonProps) => {
    const buttonClasses = `${styles.container} 
                         ${min ? styles.min : ''} 
                         ${primary ? styles.primary : ''}
                         ${fullWidth ? styles.fullWidth : ''}
                         ${className}`;

    if (link) {
        return (
            <Link href={link} passHref legacyBehavior>
                <a className={buttonClasses} style={style}>
                    {title}
                </a>
            </Link>
        );
    }

    return (
        <button 
            className={buttonClasses} 
            style={style}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default Button;