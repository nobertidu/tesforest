import { NextPage } from "next";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import styles from './Map.module.scss';

const Map: NextPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.absoluteNavBarContainer}>
                <NavBar
                    style={{
                        color: `black`,
                        textShadow: `none`
                    }}
                />
            </div>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.544971813276!2d-99.17214709999999!3d19.432056799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8b613fa38c1%3A0x6a4e586e0cee3c42!2sCto.%20Interior%20Melchor%20Ocampo%2C%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20Mexico!5e0!3m2!1sen!2sru!4v1670930527426!5m2!1sen!2sru" 
                width="100%" 
                height="700px"
            ></iframe>
            <Footer />
        </div>
    )
}
export default Map;

