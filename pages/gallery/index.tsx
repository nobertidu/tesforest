import React from "react";
import { NextPage } from 'next';
import Footer from '../../components/Footer';
import LabelHeadline from '../../components/LabelHeadline';
import NavBar from '../../components/NavBar';
import OakCard from '../../components/OakCard';
import { oakTreeData } from '../../utils/oakTreeData';
import styles from './Gallery.module.scss';
import Image from 'next/legacy/image';
import { useContext } from 'react';
import ModalContext from '../../contexts/modalContext';

const Gallery: NextPage = () => {
    const modal: any = useContext(ModalContext);

    React.useEffect(() => {
        const getTokenIds = async () => {
            if (modal.isConnected) {
                await modal.getTokenIds(modal.web3ModalProvider);
            }
        };

        getTokenIds();
    }, [modal.isConnected]);

    return (
        <>
            <div className={styles.container}>
                <NavBar />
                <div className={styles.headlineContainer}>
                    <LabelHeadline
                        title={`gallery`}
                        subTitle={`Thank you for helping the Roburna Forest grow`} />
                    <div className={styles.nftSubHeadlineContainer}>
                        <p>
                            View your Roburna Forest NFT collection
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.galleryContainer}>
                <div className={styles.leaveContainer}>
                    <Image
                        src={'/common/leavesWhite.svg'}
                        width={56}
                        height={37}
                        alt={`leavesWhite`}
                    />
                </div>
                <div className={styles.titleContainer}>
                    View Your Roburna Forest NFT collection
                </div>
                <div className={styles.gridContainer}>
                    {modal.trees?.map((item: any, i: any) => {
                        return (
                            <OakCard
                                src={item.image}
                                title={item.name}
                                key={`oakTreeData-${i}`}
                            />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Gallery;