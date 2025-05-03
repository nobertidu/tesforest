import styles from './RoadMapStepBar.module.scss';

type RoadMapStepBarProps = {
    isStepBar?: boolean;
    isInProgress?: boolean;
    title?: string;
    subTitle?: string;
    windowDimension?: any;
    item?: any;
}
const RoadMapStepBar = ({
    isStepBar = false,
    title,
    subTitle,
    windowDimension,
    item
}: RoadMapStepBarProps) => {
    return (
        <>
            {isStepBar ? (
                <div className={`${styles.stepContainer} ${item.isInProgress ? styles.inProgress : ``}`}>
                    <div className={styles.infoContainer}>
                        <div className={styles.taskNumberContainer}>
                            {item.taskNumber}
                        </div>
                        <div className={styles.textContainer}>
                            <div className={styles.titleContainer}>
                                {item.taskTitle}
                            </div>
                            <div className={styles.descriptionContainer}>
                                <div>
                                    {item.description.firstPart}
                                </div>
                                {item.list ? (
                                    <ul className={styles.orderedContainer}>
                                        <li>
                                            <b>Tiers 1-3</b> are donations to plant small plots of land -
                                            too small to quantify into donation-specific carbon credits.
                                            Donors will receive a donation certificate for tax purposes, and
                                            a piece of digital art, all linked to an NFT.
                                        </li>
                                        <li>
                                            <b>Tier 4</b> donations are large enough to incur quantifiable
                                            carbon credits. Donors can choose between receiving carbon credits or
                                            donation certificates – also in the form of an NFT, with the added
                                            gift of a piece of digital art.
                                        </li>
                                    </ul>
                                ) : (``)}
                                <div>
                                    {item.description.secondPart}
                                </div>
                            </div>
                        </div>
                    </div>
                    {item.isInProgress ? (
                        <div className={`${styles.inProgress} ${windowDimension?.width <= 1101
                            ? styles.rotated
                            : ``
                        }`}>
                            IN PROGRESS
                        </div>
                    ) : (
                        ``
                    )}
                </div>
            ) : (
                <div className={styles.container}>
                    <div>{title}</div>
                    <div>{subTitle}</div>
                </div>
            )}
        </>
    )
}

export default RoadMapStepBar;
