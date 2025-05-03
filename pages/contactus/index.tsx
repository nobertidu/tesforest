import styles from './ContactUs.module.scss';
import ContactUsForm from "../../containers/ContactUsForm";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { NextPage } from 'next';

const ContactUs: NextPage = () => {
    return (
        <>
            <div className={styles.container}>
                <NavBar />
                <ContactUsForm />
            </div>
            <Footer transparent />
        </>
    )
}

export default ContactUs;