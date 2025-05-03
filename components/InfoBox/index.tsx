import styles from './InfoBox.module.scss';

type InfoBoxProps = {
    children: React.ReactNode;
}
const InfoBox = ({
    children
}:InfoBoxProps) => {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

export default InfoBox;