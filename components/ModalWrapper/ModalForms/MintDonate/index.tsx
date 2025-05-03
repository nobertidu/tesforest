import React from 'react';
import styles from './MintDonate.module.scss';
import Image from 'next/legacy/image';
import { useEthers, Config } from '@usedapp/core';
import { Mainnet } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import Web3Connect from './Web3Connect';
import { Web3ContextProvider } from './Web3Connect/Web3Context';

type MintDonateProps = {
    data: any;
    modal: any;
}
const MintDonate = ({
    data,
    modal
}: MintDonateProps) => {
    return (
        <div
            className={`${styles.container} ${modal.isActive
                ? styles.active
                : ``
                }`}
            onClick={() => modal.setIsActive(false)}

        >
            <div className={styles.contentContainer}
                onClick={(e) => e.stopPropagation()}>
                <div
                    className={styles.closingButtonContainer}
                    onClick={() => modal.setIsActive(false)}
                >
                    <Image
                        src={`/common/closingButton.svg`}
                        width={23}
                        height={23} />
                </div>
                <div className={styles.donationFormContainer}>
                    <div className={styles.subHeadlineContainer}>
                        {data.subTitle}
                    </div>
                    <div className={styles.headlineContainer}>
                        {data.title}
                    </div>
                    <Web3ContextProvider >
                        <div className={styles.gridImageContainer}>
                            {data.connectWith.map((item: any, i: any) => {
                                return (
                                    // TODO: change key={item.src} to key={item.type}
                                    <Web3Connect key={item.type} item={item} i={i} setActiveContentType={modal.setActiveContentType} handleConnect={modal.handleConnect} handleConnectMobile={modal.handleConnectMobile}/>
                                );
                            })}
                        </div>
                    </Web3ContextProvider>
                </div>
            </div>
        </div >
    )
}

export default MintDonate;