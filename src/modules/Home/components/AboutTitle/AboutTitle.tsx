import styles from "./AboutTitle.module.css";

const AboutTitle = () => {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.aboutBar}>
                <div></div>
            </div>
            <div className={styles.aboutTitle}>ABOUT</div>
            <div className={styles.aboutContact}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default AboutTitle;
