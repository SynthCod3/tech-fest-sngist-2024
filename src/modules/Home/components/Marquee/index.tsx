import styles from "./index.module.css";

const Marquee = () => {
    return (
        <div className={styles.marquee}>
            <div className={styles.marqueeGroup}>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
            </div>
            <div className={styles.marqueeGroup} aria-hidden="true">
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
                <span>hello there ➺</span>
            </div>
        </div>
    );
};

export default Marquee;
