import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
	const navigate = useNavigate();
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.logoContainer}>
                <img src="/logo.svg" alt="logo" onClick={() => navigate("/")} />
            </div>
            <div className={styles.footerContent}>
                <div className={styles.footerLinks}>
                    <b>EVENTS</b>
                    <a href="">Workshops</a>
                    <a href="">Hackathon</a>
                    <a href="">Games</a>
                    <a href="">Competition</a>
                </div>
                <div className={styles.footerLinks}>
                    <b>ABOUT US</b>
                    <a href="">Team</a>
                    <a href="">Teachers</a>
                    <a href="">College</a>
                    <a href="">Web devs</a>
                </div>
                <div className={styles.footerLinks}>
                    <b>SOCIAL</b>
                    <div>
                        <a href="">
                            <BsLinkedin />
                        </a>
                        <a href="">
                            <BsInstagram />
                        </a>
                        <a href="">
                            <BsWhatsapp />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
