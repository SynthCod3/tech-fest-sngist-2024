import promo from "./assets/techfestWebRatio.mp4";
import displayscreen from "./assets/about-tab-display.png";
import styles from './AboutUs.module.css'

type Props = {};

export const AboutUs = (_props: Props) => {
  return (
		<div className={styles.aboutWrapper}>
			<div className={styles.aboutDisplyContentVideo}>
				<div className={styles.displayScreenWrapper}>
					<img
						className={styles.displayscreen}
						src={displayscreen}
						alt=""
					/>
					<video
						className={styles.logoAbout}
						src={promo}
						autoPlay
						muted
						loop
					/>
				</div>
				<div className={styles.displayScreenContent}>
					<p>
						<b> Agreya 2K24 </b> marks a pivotal moment in the
						technological calendar, where the brightest minds
						converge to celebrate innovation, creativity, and the
						spirit of the digital age. Hosted by the Computer
						Science & Engineering Department of SNGIST Group of
						Institutions, in collaboration with Vega, this tech fest
						is a testament to our shared vision of shaping the
						future of technology. Over two exhilarating days,
						participants will have the unique opportunity to dive
						into a world of tech-driven competitions, workshops, and
						interactive experiences designed to challenge, inspire,
						and transform. Agreya is not just an event; it's a
						movement towards a future where technology and human
						ingenuity unite to create limitless possibilities.
					</p>
				</div>
			</div>
		</div>
  );
};
