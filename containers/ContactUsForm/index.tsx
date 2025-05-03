import ContactUsInputField from '../../components/ContactUsInputField';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import styles from './ContactUsForm.module.scss';

const ContactUsForm = () => {
    const windowDimension = useWindowDimensions();
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                contact us
            </div>
            <div className={styles.descriptionContainer}>
                <div>
                    We would really love to hear your comment about that. Fill out the required fields 
                    and share your thoughts with us.
                </div>
                <div>
                    Your email address will not be published. Required fields are marked *
                </div>
            </div>
            <ContactUsInputField
                windowDimension={windowDimension} 
            />
        </div>
    )
}

export default ContactUsForm;