import styles from "./Partners.module.css";
import fundesign from "./assets/fundesign.png";
import creative from "./assets/Creartive.png";

export const Partners = () => {
	return (
		<div className={styles.Wrapper}>
			<div>
				<h1>OUR PARTNERS</h1>
			</div>
			<div>
				<a href="https://fundesign.in" target="_blank">
					<img src={fundesign} alt="" />
				</a>{" "}
				<a href="https://fundesign.in" target="_blank">
					<img src={creative} alt="" />
				</a>
			</div>
		</div>
	);
};
