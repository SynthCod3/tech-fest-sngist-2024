import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "../../utils/svgComponents";
import Countdown from "./components/Countdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeEvents from "./components/HomeEvents";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import MarqueeComponenet from "./components/MarqueeComponent";
import Sponsers from "./components/Sponsers/Sponsers";

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
                    <span>WEBSYNC</span>
                </div>
                <div>
                    <Countdown targetDate={date} />
                </div>
                <div className={styles.marqueeContainer}>
                    <Marquee />
                </div>
            </div>
           <div className={styles.sponsersContainer}>
                    <AboutTitle title="Sponsers" />
                    <Sponsers />
            </div>
            <div className={styles.eventsWrapper}>
                <Header title="Events" />
                <HomeEvents />
            </div>
            <div>
                <AboutTitle
                title="About"/>
                <div className={styles.aboutWrapper}>
                    <div>
                        <span>
                             hey !
                        </span>
                        <span>
                            we are Westers , a computer science
                        </span>
                        <span>
                             The Department of Computer Science was established in 1984. The Department aims at upholding the cognitive aspect of education by ensuring academic excellence and intellectual growth of its students. 
                        </span>
                    </div>
                    <div className={styles.aboutSeprator}>
                    </div>
                    <div >
                        The department lays prime focus on academics interspersed with co-curricular and extra-curricular activities that bring the versatility of its students to the fore and gives them a sound sense of perspective. The faculty comprises of experienced and dedicated teachers who with their expert inputs encourage students to explore new avenues. The computer society “Websters” was started with the aim to foster interest in the world of computers and technology. It provides a platform for like-minded brains to communicate with each other and expand their horizons
                    </div>
                </div>
                <div className={styles.marqueeContainerTwo}>
                    <MarqueeComponenet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
