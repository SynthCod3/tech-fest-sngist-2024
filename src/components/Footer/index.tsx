import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import ScrambleText from "../ScrambleText";

const Footer = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.footerWrapper}>
			<div className={styles.logoContainer}>
				<img src="/logo.svg" alt="logo" onClick={() => navigate("/")} />
			</div>
			<div className={styles.footerContent}>
				<div className={styles.footerLinks}>
					<b>EVENTS</b>
					<a href="/events?filter=workshop">
						<ScrambleText text="Workshops" />
					</a>
					<a href="/events/hackathon">
						<ScrambleText text="Hackathons" />
					</a>
					<a href="/events?filter=game">
						<ScrambleText text="Games" />
					</a>
					<a href="/events?filter=competition">
						<ScrambleText text="Competitions" />
					</a>
				</div>
				<div className={styles.footerLinks}>
					<b>ABOUT US</b>
					<a href="">
						<ScrambleText text="Team" />
					</a>
					<a href="">
						<ScrambleText text="Teachers" />
					</a>
					<a href="">
						<ScrambleText text="College" />
					</a>
					<a href="">
						<ScrambleText text="Web devs" />
					</a>
				</div>

				<div className={styles.footerLinks}>
					<b>SOCIAL</b>
					<div>
						<a href="">
							<BsLinkedin />
						</a>
						<a href="">
							<BsInstagram />
						</a>
						<a href="">
							<BsWhatsapp />
						</a>
					</div>
				</div>
				{/* <div className={styles.footerLinks}>
					<b>CONTACT</b>
					{/* <div>
					<MailLogoSvg />
					<a href="mailto:events@mulearn.in">events@mulearn.in</a>
					</div> 
					<div>
						<BsWhatsapp />
						<a href="tel:+91 79940 43754">
							<ScrambleText text="+91 79940 43754" />
						</a>
					</div>
					<div>
						<PhoneLogoSvg />
						<a href="tel:+91 94007 43624">
							<ScrambleText text="+91 94007 43624" />
						</a>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Footer;
