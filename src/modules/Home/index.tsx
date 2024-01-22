import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";

const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
			<Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroText}>
					<span>Sree Narayana Guru Institute of Science and Technology</span>
					<p>Presents</p>
                </div>
                <div className={styles.marqueeContainer}>
					<Marquee />
				</div>
            </div>
        </div>
    );
};

export default Home;
