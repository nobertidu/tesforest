import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';
import NavBar from '../components/NavBar';
import InfoBoxWithDonateButton from '../containers/InfoBoxWithDonateButton';
import { homePageSectionData } from '../utils/homePageSectionData';
import LabelHeadline from '../components/LabelHeadline';
import ForestProtectionSection from '../components/HomePageSection/ForestProtectionSection';
import PlantationForestSection from '../components/HomePageSection/PlantationForestSection';
import RoburnaForestSection from '../components/HomePageSection/RoburnaForestSection';
import LinkSection from '../components/HomePageSection/LinkSection';
import Footer from '../components/Footer';
import useWindowDimensions from '../hooks/useWindowDimentions';
import { authorsSourceData } from '../utils/authorsSourceData';

const HomePage: NextPage = () => {
  const windowDimension = useWindowDimensions();
  return (
    <>
      <div className={styles.label}>
        <NavBar />
        <LabelHeadline
          title={`roburna forest program`}
          subTitle={`The world needs more forests`} />
        <InfoBoxWithDonateButton
          windowDimension={windowDimension} />
      </div>
      <div className={styles.sectionContainer}>
        <ForestProtectionSection
          forestProtectionSectionData={homePageSectionData.firstSection}
        />
        <PlantationForestSection 
          plantationForestData={homePageSectionData.secondSection}
          windowDimension={windowDimension}
        />
        <RoburnaForestSection 
          roburnaForestSectionData={homePageSectionData.thirdSection}
        />
        <LinkSection
          authorsSourceData={authorsSourceData} />
      </div>
      <Footer />
    </>
  )
}

export default HomePage;