import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "./components/svgComponents";
import { CgMouse } from "react-icons/cg";

const Home = () => {
    return (
        <div className={styles.HomeWrapper}>
            <Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroBgElements}>
                    <HeroBgLeft className={styles.heroBgLeft} />
                    <HeroBgRight className={styles.heroBgRight} />
                </div>
                <div className={styles.heroText}>
                    <span>WEBSYNC</span>
                    <b>
                        <CgMouse />
                    </b>
					<p>Scroll Down</p>
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
        </div>
    );
};

export default Home;
