import styles from './OakCard.module.scss';
import Image from 'next/legacy/image';

type OakCardProps = {
    src: string;
    title: string;
}
const OakCard = ({
    src,
    title
}:OakCardProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image 
                    src={src} 
                    layout='responsive' 
                    width={460} 
                    height={460} 
                    alt={`OakCard`}
                />
            </div>
            <div className={styles.titleContainer}>
                {title}
            </div>
        </div>
    )
}

export default OakCard;