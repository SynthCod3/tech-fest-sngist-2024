import styles from "./Sponsers.module.css";
import twinkle from "./assets/singlestar.png";
// import fundesign from "./assets/fundesign.png";
// import Mulearn from "./assets/µLearn.png";

const Sponsers = () => {
	return (
		<div className={styles.sponsorsLogoWrapper}>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a href="https://iedc.sngist.org/" target="_blank">
						<img src="/iedc.png" alt="IEDC SNGIST Logo" />
					</a>{" "}
					<a href="https://mulearn.org/" target="_blank">
						<img src="/vega.png" alt="vega" />
					</a>
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
				</div>
			</div>
			{/* <div className={styles.lineThree} style={{ width: "40%" }}></div>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a href="https://fundesign.in/" target="_blank">
						<img src={fundesign} alt="FUN DESIGN LOGO" />
					</a>
					<a href="https://fundesign.in/" target="_blank">
						<img src={fundesign} alt="FUN DESIGN LOGO" />
					</a>
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
					<img src={twinkle} alt="" />
				</div>
			</div>
			<div className={styles.lineThree}></div>
			<div className={styles.divSponsorsTire}>
				<div className={styles.companySponsorsDiv}>
					<a href="https://fundesign.in/" target="_blank">
						<img src={fundesign} alt="FUN DESIGN LOGO" />
					</a>
					<a href="https://fundesign.in/" target="_blank">
						<img src={fundesign} alt="FUN DESIGN LOGO" />
					</a>
					<a href="https://fundesign.in/" target="_blank">
						<img src={fundesign} alt="FUN DESIGN LOGO" />
					</a>
				</div>
				<div className={styles.twinkleSponsors}>
					<img src={twinkle} alt="" />
				</div>
			</div> */}
		</div>
	);
};

export default Sponsers;
