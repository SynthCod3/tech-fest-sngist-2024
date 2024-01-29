import styles from "./index.module.css";

type Props = {
    title: string;
};

const Header = ({ title }: Props) => {
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.headerLeft}>
				<div></div>
			</div>
            <div className={styles.headerTitle}>{title}</div>
            <div className={styles.headerRight}>
				<div></div>
				<div></div>
			</div>
        </div>
    );
};

export default Header;
