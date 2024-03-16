import promo from "./assets/techfestWebRatio.mp4";
import displayscreen from "./assets/about-tab-display.png";
import styles from './AboutUs.module.css'

type Props = {};

export const AboutUs = (_props: Props) => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutDisplyContentVideo}>
        <div className={styles.displayScreenWrapper}>
          <img className={styles.displayscreen} src={displayscreen} alt="" />
          <video className={styles.logoAbout} src={promo} autoPlay muted loop/>
        </div>
        <div className={styles.displayScreenContent}>
          <p>
            <b> CODe Design Week (CDW ‘23)</b> is the first ever design week
            conducted in engineering colleges. This is a week completely
            dedicated to design where students from all over Kerala disrupt,
            imagine, ideate, innovate, and design for a better tomorrow. Our
            goal is to hand-pick the budding designers, help them in exploring
            the possibilities, opportunities & finding the passion in design.
            Students can learn and interact through workshops, panel
            discussions, keynote speeches, expos and exhibitions, and many more
            organized as a part of the CODe Design Week (CDW ‘23) where they can
            listen, and discuss with the industry experts on the future of
            design.
          </p>
        </div>
      </div>
    </div>
  );
};
