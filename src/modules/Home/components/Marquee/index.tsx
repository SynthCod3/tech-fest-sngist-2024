import styles from "./index.module.css";

const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
                <span>Caution ✪</span>
                <span>Tech Alert ➺</span>
                <span>Tech Savy ✪</span>
                <span>Workshop ✪</span>
                <span>hello there ✪</span>
                <span>hello there ✪</span>
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
                <span>Caution ✪</span>
                <span>Tech Alert ➺</span>
                <span>Tech Savy ✪</span>
                <span>Workshop ✪</span>
                <span>hello there ✪</span>
                <span>hello there ✪</span>
            </div>
        </div>
    );
};

export default Marquee;
