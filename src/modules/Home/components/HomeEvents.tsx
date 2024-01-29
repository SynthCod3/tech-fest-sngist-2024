import Card from "../../../components/Card";
import styles from "../index.module.css";

const HomeEvents = () => {
    return (
        <div className={styles.eventsContainer}>
            <div>
                <Card
                    name={"Hackathon"}
                    link={
                        "https://i.pinimg.com/originals/4e/89/55/4e8955c4305e7e633a587729b6bbb66c.jpg"
                    }
                />
            </div>
        </div>
    );
};

export default HomeEvents;
