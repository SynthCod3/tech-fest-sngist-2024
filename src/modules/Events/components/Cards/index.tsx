import styles from './index.module.css';
import { GiClick } from "react-icons/gi";

const Cards = () => {
  return (
    <div >
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src="https://euphoriaofbreakdown.files.wordpress.com/2018/12/img_9027.jpg?w=1080"   alt="no image avilable"/>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <span>Event name</span>
                </div>
                <div className={styles.iconContainer}>
                    <button ><GiClick /> <span>VIEW</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cards