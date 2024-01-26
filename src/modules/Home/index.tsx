import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "./components/svgComponents";
// import { CgMouse } from "react-icons/cg";
import Countdown from "./components/Countdown";
import Footer from "../../components/Footer";
import { useScramble } from "use-scramble";

const Home = () => {
    const date = new Date("2024-02-24T12:00:00");
    const { ref, replay } = useScramble({
        text: "WEBSYNC",
        range: [33, 125],
        speed: 0.71,
        tick: 3,
        step: 7,
        scramble: 8,
        seed: 0,
        chance: 0.89,
        overdrive: false,
        overflow: false,
    });

    return (
        <div className={styles.HomeWrapper}>
            <Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.heroBgElements}>
                    <HeroBgLeft className={styles.heroBgLeft} />
                    <HeroBgRight className={styles.heroBgRight} />
                </div>
                <div className={styles.heroText}>
                    <span
                        ref={ref}
                        onMouseOver={replay}
                        onFocus={replay}
                    ></span>
                </div>
                <div>
                    <Countdown targetDate={date} />
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
