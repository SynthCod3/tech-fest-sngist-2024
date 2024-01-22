import styles from './index.module.css';
import { FaInstagram } from "react-icons/fa";
import { GiClick } from "react-icons/gi";

const Cards = () => {
  return (
    <div >
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src="https://marketplace.canva.com/EAFIJeGhxQY/1/0/1131w/canva-red-and-black-calendar-of-events-upcoming-music-concert-poster-CKoCWAo0JRM.jpg" width="305px"  alt="no image avilable"/>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <span>Event name</span>
                    <span>Event description</span>
                </div>
                <div className={styles.iconContainer}>
                    <span><FaInstagram /></span>
                    <span><GiClick /></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards