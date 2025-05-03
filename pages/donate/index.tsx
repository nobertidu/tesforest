import LabelHeadline from '../../components/LabelHeadline';
import NavBar from '../../components/NavBar';
import Image from 'next/legacy/image';
import styles from './Donate.module.scss';
import DonateCard from '../../components/DonateForm/DonateCard';
import { donateCardData } from '../../utils/donateFormData';
import Footer from '../../components/Footer';
import { NextPage } from 'next';

const Donate: NextPage = () => {
    return (
        <>
            <div className={styles.container}>
                <NavBar />
                <LabelHeadline
                    title={`Donate`}
                    subTitle={`Help the Roburna Forest grow`}
                />
            </div>
            <div className={styles.donateContainer}>
                <div className={styles.leaveContainer}>
                    <Image
                        src={`/common/leavesWhite.svg`}
                        width={56}
                        height={47}
                        alt={`leavesWhite`}
                    />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <h3>
                            We are currently establishing a nursery for our beloved Oaks – the first species of
                            tree to be planted, as “nodes” in our living ecosystem.
                        </h3>
                        <h2>
                            Become a SEED DONOR by acquiring an NFT if our first Roburna Forest Collection
                        </h2>
                        <h3>
                            The higher the value of the NFT, the more Oak saplings it will provide to our first
                            Forest.<br />The donation paired with the beautiful digital art can be the perfect gift for
                            yourself, or a loved one who cares about Nature.
                        </h3>
                    </div>
                    <div className={styles.donateCardContainer}>
                        <DonateCard
                            donateData={donateCardData.creditCard}
                        />
                        <DonateCard
                            donateData={donateCardData.Mint}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Donate;