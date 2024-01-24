import Navbar from "../../components/Navbar"
import { HeroBgLeft, HeroBgRight } from "../Home/components/svgComponents"
import Cards from "./components/Cards"
import styles from "./index.module.css"
const Events = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.HeroWrapper}>
        <div className={styles.heroText}>
          <span>EVENTS</span>
        </div>
        <div className={styles.heroBgElements}>
          <HeroBgLeft className={styles.heroBgLeft} />
          <HeroBgRight className={styles.heroBgRight} />
        </div>
        <div className={styles.cardContainer}>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Events