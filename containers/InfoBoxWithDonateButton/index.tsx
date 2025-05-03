import Button from '../../components/Button';
import InfoBox from '../../components/InfoBox';
import styles from './InfoBoxWithDonateButton.module.scss';

type InfoBoxWithDonateButtonProps = {
    windowDimension: any;
}
const InfoBoxWithDonateButton = ({
    windowDimension
}:InfoBoxWithDonateButtonProps) => {
    return (
        <div className={styles.container}>
            <InfoBox>
                Earth is rapidly losing its forests - 129 million hectares were cut down<br /> between 1990 and 2015,
                an area the size of South Africa. Deforestation is<br /> responsible for an estimated 20%  of annual global
                carbon emissions, as well<br /> as the harder to quantify effects of soil erosion and biodiversity loss.
            </InfoBox>
            <div className={styles.buttonContainer}>
                <Button
                    title={`DONATE NOW`}
                    link={`/donate`}
                    style={windowDimension?.width <= 755
                        ? {
                            fontSize: `.65rem`,
                            padding: `.4rem 1.7rem`
                        } 
                        : {}
                    }
                />
            </div>
        </div>
    )
}

export default InfoBoxWithDonateButton;