import { Link } from "react-router-dom";
import styles from "../index.module.css";

type Props = {
    text: string;
    link: string;
    icon: string;
    index: number;
	onclick?: () => void
};

const NavCards = (props: Props) => {
    return (
        <Link to={props.link} className={styles.navCard} onClick={props.onclick}>
            <span>{props.index}</span>
            <div>
                <img src={props.icon} alt="icon" />
            </div>
            <b>{props.text}</b>
        </Link>
    );
};

export default NavCards;
