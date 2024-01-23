import styles from "./index.module.css";

const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
                <span>Caution Quest ✪</span>
                <span>Tech Alert ✪</span>
                <span>Workshop ✪</span>
                <span>Fest breach ✪</span>
                <span>Web injection ✪</span>
                <span>Tech Savy ✪</span>
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
            <span>Caution Quest ✪</span>
                <span>Tech Alert ✪</span>
                <span>Workshop ✪</span>
                <span>Fest breach ✪</span>
                <span>Web injection ✪</span>
                <span>Tech Savy ✪</span>
            </div>
        </div>
    );
};

export default Marquee;
