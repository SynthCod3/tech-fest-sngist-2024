import styles from "./index.module.css";
import Navbar from "../../components/Navbar";
import Marquee from "./components/Marquee";
import { HeroBgLeft, HeroBgRight } from "../../utils/svgComponents";
import Countdown from "./components/Countdown";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeEvents from "./components/HomeEvents";
import AboutTitle from "./components/AboutTitle/AboutTitle";
import Sponsers from "./components/Sponsers/Sponsers";
import Faq1 from "./components/Faq/FaqContent";
import { Location } from "./components/Location/Location";

const Home = () => {
	const date = new Date("2024-03-21T10:00:00");

	return (
		<div className={styles.HomeWrapper}>
			<Navbar />
			<div className={styles.HeroWrapper}>
				<div className={styles.heroBgElements}>
					<HeroBgLeft className={styles.heroBgLeft} />
					<HeroBgRight className={styles.heroBgRight} />
				</div>
				<div className={styles.heroText}>
					<span>AGREYA</span>
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
			<div className={styles.sponsersContainer}>
				<AboutTitle title="SPONSERS" />
				<Sponsers />
			</div>
			<div className={styles.sponsersContainer}>
				<Header title="FAQ" />
				<Faq1 />
			</div>

			<div className={styles.sponsersContainer}>
				<AboutTitle title="LOCATION" />
				<Location />
			</div>
			<Footer />
		</div>
	);
};

export default Home;
