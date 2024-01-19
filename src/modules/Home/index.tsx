import styles from "./index.module.css";
// import heroImage from "../../assets/hero.svg";
import Navbar from "../../components/Navbar";
import Flames from "./components/Flames";

const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
			<Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroText}>
                    {/* <img src={heroImage} alt="no image available" /> */}
					<b className={styles.agniyathra}>AGNIYATHRA</b>
					<b className={styles.techfest}>TECH FEST</b>
					<b className={styles.techfest}>2024</b>
                </div>
                <div className={styles.flames}>
					<Flames />
				</div>
            </div>
        </div>
    );
};

export default Home;
