import type { NextPage } from 'next';
import LabelHeadline from '../../components/LabelHeadline';
import NavBar from '../../components/NavBar';
import RoadMapStepBar from '../../components/RoadMapStepBar';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import styles from './RoadMap.module.scss';
import Image from 'next/legacy/image';
import { roadMapData } from '../../utils/roadmapPageSectionData';
import Footer from '../../components/Footer';

const RoadMap: NextPage = () => {
    const windowDimension = useWindowDimensions();
    return (
        <>
            <div className={styles.container}>
                <NavBar />
                <LabelHeadline
                    title={`ROADMAP`}
                    subTitle={`For the Roburna Forest Program`}
                />
            </div>
            <div className={styles.roadmapContainer}>
                <div className={styles.leavecontainer}>
                    <Image 
                        src={`/common/leavesWhite.svg`} 
                        width={56} 
                        height={47}
                        alt={`leavesWhite`}
                    />
                </div>
                <div className={styles.stepBarContainer}>
                    {roadMapData.map((item: any, i: any) => {
                        return (
                            <RoadMapStepBar
                                item={item}
                                isStepBar
                                windowDimension={windowDimension}
                                key={`roadMapData-${i}`}
                            />
                        )
                    })}
                    <div className={styles.greenStepBarContainer}>
                        <RoadMapStepBar 
                            title={`Roburna aims to have Forests in many places, including all the areas that house 
                                Roburna nodes. So as the Blockchain network grows, so will the Forests.`} 
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default RoadMap;