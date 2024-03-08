import { Link } from "react-router-dom";
import styles from "../index.module.css";
import { IconType } from "react-icons";
import ScrambleText from "../../ScrambleText";

type Props = {
    text: string;
    link: string;
    icon: IconType;
    index: number;
    onclick?: () => void;
};

const NavCards = (props: Props) => {
    return (
        <Link
            to={props.link}
            className={styles.navCard}
			onClick={props.onclick}
			key={props.index}
        >
            <span>{props.index}</span>
            <div>
                <props.icon />
            </div>
            <b><ScrambleText text={props.text} /></b>
        </Link>
    );
};

export default NavCards;
