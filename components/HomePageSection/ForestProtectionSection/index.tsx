import styles from './ForestProtectionSection.module.scss';
import Image from 'next/legacy/image';


interface IForestProtectionSectionData {
    title: string;
    description: string;
    conclusion: any;
}
type ForestProtectionSectionProps = {
    forestProtectionSectionData: IForestProtectionSectionData,
}
const ForestProtectionSection = ({
    forestProtectionSectionData
}: ForestProtectionSectionProps) => {
    const { title, description, conclusion } = forestProtectionSectionData;
    return (
        <div className={styles.container}>
            <div className={styles.leaveContainer}>
                <Image 
                    src={'/common/leavesWhite.svg'} 
                    width={56} 
                    height={37}
                    alt={`leavesWhite`}
                />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    {title}
                </div>
                <div className={styles.descriptionContainer}>
                    {description}
                </div>
                <div className={styles.conclusionContainer}>
                    {conclusion.title}
                    <ul className={styles.factsContainer}>
                        {conclusion.facts.map((item: any, i: any) => {
                            return (
                                <li key={`conclusion-facts-${i}`}>
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ForestProtectionSection;