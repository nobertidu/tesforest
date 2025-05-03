import Link from 'next/link';
import styles from './Footer.module.scss';

type FooterProps = {
    transparent?: boolean;
}
const Footer = ({
    transparent = false
}: FooterProps) => {
    return (
        <div className={`${styles.container} ${transparent
            ? styles.transparent
            : ``
            }`}>
            Ⓒ 2022 All Right Reserved. Roburna is a registered trademark of Roburna Labs.
            <Link href={`/`}>
                <div className={styles.linkContainer}>
                    Privacy & Terms | Cookie Preferences
                </div>
            </Link>
        </div>
    )
}

export default Footer;