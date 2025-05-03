import React from 'react';
import styles from './ConvertCoinCard.module.scss';
import Image from 'next/legacy/image';
import Button from '../../Button';

type ConvertCoinCardProps = {

}
const ConvertCoinCard = () => {
  return (
      <div className={styles.container}>
          <div className={styles.cryptoCard}>
              <div className={styles.amountOfCryptoContainer}>
                  <div>
                      Crypto
                  </div>
                  <div>
                      0.125
                  </div>
                  <div>
                      Balance: 1.2 BTC
                  </div>
              </div>
              <div className={styles.coinContainer}>
                  <div className={styles.imageContainer}>
                        <Image    
                            src={`/common/btc.svg`} 
                            layout='fill'
                        />
                  </div>
                  <div className={styles.currencyContainer}>
                      BTC
                  </div>
                  <div>
                    <Image
                        src={`/common/arrowForward.svg`}
                        width={18}
                        height={13}
                    />
                  </div>
              </div>
          </div>
          <div className={styles.usdCard}>
              <div className={styles.amountOfUsdContainer}>
                  Amount <b>1050,28</b>
              </div>
              <div className={styles.currencyContainer}>
                  USD
              </div>
              <div className={styles.absoluteImageContainer}>
                  <Image
                    src={`/common/currencyExchange.svg`}
                    layout='fill'
                />
              </div>
          </div>
          <div className={styles.absoluteButtonContainer}>
              <Button title={'Donate now'} />
          </div>
      </div>
  )
}

export default ConvertCoinCard