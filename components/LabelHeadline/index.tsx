import styles from './LabelHeadline.module.scss';

type LabelHeadlineProps = {
    title: string;
    subTitle: string;
}
const LabelHeadline = ({
    title,
    subTitle
}:LabelHeadlineProps) => {
    return (
        <div className={styles.headlineContainer}>
            <div className={styles.titleContainer}>
                {title}
            </div>
            <div className={styles.subTitleContainer}>
                {subTitle}
            </div>
        </div>
    )
}

export default LabelHeadline;