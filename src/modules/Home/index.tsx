import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "../../utils/svgComponents";
import Countdown from "./components/Countdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeEvents from "./components/HomeEvents";

const Home = () => {
    const date = new Date("2024-02-24T12:00:00");

    return (
        <div className={styles.HomeWrapper}>
            <Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroBgElements}>
                    <HeroBgLeft className={styles.heroBgLeft} />
                    <HeroBgRight className={styles.heroBgRight} />
                </div>
                <div className={styles.heroText}>
                    <span>
                        WEBSYNC
                    </span>
                </div>
                <div>
                    <Countdown targetDate={date} />
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
			<div className={styles.eventsWrapper}>
				<Header title="Events" />
				<HomeEvents />
			</div>
            <Footer />
        </div>
    );
};

export default Home;
