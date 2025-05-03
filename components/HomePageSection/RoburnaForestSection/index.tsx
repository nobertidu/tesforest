import RoadMapStepBar from '../../RoadMapStepBar';
import styles from './RoburnaForestSection.module.scss';
import Image from 'next/legacy/image';

interface IRoburnaForestSectionData {
    headline: string;
    title: string;
    description: string;
}
type RoburnaForestSectionProps = {
    roburnaForestSectionData: IRoburnaForestSectionData,
}
const RoburnaForestSection = ({
    roburnaForestSectionData,
}: RoburnaForestSectionProps) => {
    const { headline, title, description } = roburnaForestSectionData;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.leaveContainer}>
                    <Image 
                        src={'/common/leavesGreen.svg'} 
                        width={40} 
                        height={25}
                        alt={`leavesGreen`}
                    />
                </div>
                <div className={styles.headlineContainer}>
                    {headline}
                </div>
                <div className={styles.gridContainer}>
                    <div className={styles.titleContainer}>
                        {title}
                    </div>
                    <div className={styles.firstPartDescriptionContainer}>
                        {description}
                    </div>
                    <div className={styles.secondPartDescriptionContainer}>
                        <p>
                            This is NOT a plan to buy carbon credits
                            from third parties, or engage in artificial, mono-culture plantations. The Roburna Forest will be just that
                            – a FOREST – a diverse, layered and balanced ecosystem of species native to their areas.
                        </p>
                        <p>
                            The Roburna Forest
                            will be planted on land owned by Roburna and its affiliate organizations, so there is no risk of losing control
                            over the planted areas in the future.
                        </p>
                        <p>
                            Planting activity will focus on the main species of trees and shrubs
                            that create an environment encouraging other species of plants, fungi and animals to settle in –
                            thus working with Nature, not against it.
                        </p>
                    </div>
                </div>
                <RoadMapStepBar
                    title={`As the first blockchain designed to function exclusively on renewable energy sources, 
                        ensuring carbon neutrality,`}
                    subTitle={`Roburna was always meant to stand for environmental sustainability. 
                        Now, the Roburna Forest Program aims to take one step further, towards carbon negative status.`}
                />
            </div>
        </>
    )
}

export default RoburnaForestSection;