import styles from "./index.module.css";

type Props = {
    text: string;
	onClick?: () => void;
};

const Button = (props: Props) => {
    return (
        <div className={styles.buttonWrapper}>
            <div></div>
            <div onClick={props.onClick}>
                <span>{props.text}</span>
            </div>
        </div>
    );
};

export default Button;
