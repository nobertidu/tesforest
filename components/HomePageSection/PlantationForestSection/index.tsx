import Button from '../../Button';
import styles from './PlantationForestSection.module.scss';
import Image from 'next/legacy/image';

interface IPlantationForestData {
    headline: string;
    title: string;
    description: string;
    conclusion: any;
}
type PlantationForestSectionProps = {
    plantationForestData: IPlantationForestData,
    windowDimension: any;
}
const PlantationForestSection = ({
    plantationForestData,
    windowDimension
}: PlantationForestSectionProps) => {
    const { headline, title, description, conclusion } = plantationForestData;
    return (
        <div className={styles.container}>
            <div className={styles.headlineContainer}>
                {headline}
                <div className={styles.leaveContainer}>
                    <Image
                        src={'/common/leavesGreen.svg'}
                        width={40}
                        height={25}
                        alt={`leavesGreen`}
                    />
                </div>
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
                </div>
                <div className={styles.buttonContainer}>
                    <Button
                        title={`DONATE NOW`}
                        link={`/donate`}
                        style={windowDimension?.width <= 1020
                            ? {
                                fontSize: `.8rem`,
                            } : {}
                        }
                    />
                </div>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={windowDimension?.width > 1020
                        ? `/images/desktopForestPic.png`
                        : `/images/mobileForestPic.png`
                    }
                    layout='fill'
                    alt={`leavesWhite`}
                />
            </div>
        </div>
    )
}

export default PlantationForestSection;