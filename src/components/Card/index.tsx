import styles from "./index.module.css";
import Tilt from "react-parallax-tilt";

type Props = {
    name: string;
    link: string;
};

const Card = (props: Props) => {
    return (
        <Tilt
            className={styles.cardWrapper}
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.45}
            scale={1.02}
        >
                <div>
                    <span>{props.name}</span>
                </div>
                <div className={styles.cardBg}>
                    <div className={styles.imageContainer}>
                        <img src={props.link} alt={props.name} />
                    </div>
                </div>
        </Tilt>
    );
};

export default Card;
