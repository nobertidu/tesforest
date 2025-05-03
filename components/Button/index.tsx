import Link from 'next/link';
import styles from './Button.module.scss';

type ButtonProps = {
    title: string;
    link?: string;
    min?: boolean;
    style?: any;
}
const Button = ({
    title,
    link,
    min = false,
    style = false
}: ButtonProps) => {
    return (
        <>
            {link ? (
                <Link href={link}>
                    <div
                        className={`${styles.container} ${min ? styles.min : ``}`}
                        style={{
                            ...style
                        }}>
                        {title}
                    </div>
                </Link>
            ) : (
                <div
                    className={`${styles.container} ${min ? styles.min : ``}`}
                    style={{
                        ...style
                    }}>
                    {title}
                </div>
            )}

        </>
    )
}

export default Button;