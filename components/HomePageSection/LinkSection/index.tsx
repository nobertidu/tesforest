import Link from 'next/link';
import styles from './LinkSection.module.scss';

type LinkSectionProps = {
    authorsSourceData: any;
}
const LinkSection = ({
    authorsSourceData,
}: LinkSectionProps) => {
    return (
        <div className={styles.container}>
            {authorsSourceData.map((item: any, i: any) => {
                return (
                    <div key={`authorsSourceData-${i}`}>
                        {item.title}
                        <Link
                            href={item.src}
                            target='_blank'
                        >
                            {item.linkTitle}
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default LinkSection;






