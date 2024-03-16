import styles from "./Location.module.css";
import venueLogo from "./assets/venueLogo.png";
import card from "./assets/card.png";
import { MailLogoSvg, PhoneLogoSvg } from "./assets/svg";
type Props = {};

export const Location = (_props: Props) => {
  return (
    <div id="Venue" className={styles.LocationCard}>
      <div className={styles.locationWrapper}>
        <div className={styles.infoContainer}>
          <img src={venueLogo} alt="" />
          <div className={styles.infosection}>
            <h1>Hackathon Venue</h1>
            <p>
              SNGIST GROUP OF INSTITUTIONS,<br></br>PockancheryKochi, Vadanappally,
              <br></br>
              Kerala - India 680619
            </p>
          </div>
          <a
            href="https://maps.app.goo.gl/nHamCij7q4oXc8h57"
            target="_blank"
            className={styles.atagButton}
          >
            VISIT VENUE
          </a>
        </div>
      </div>
      <div className={styles.bottomWrapper}>
        <div className={styles.cardWrapper}>
          <img src={card} alt="" />
          <div>
            <p>
              Beach vibe, 24 hours of<br></br>Coding hackathon, games &<br></br>
              events, Absolutely free of
              <br></br>cost, Food and Beverages,<br></br>Snacks and more.
            </p>
            <div className={styles.lineDiv}></div>
            <p>
              Hackathon Goodies, Karma<br></br>Points
            </p>
          </div>
        </div>
        <div className={styles.contactWrapper}>
          <p>Contact Us for further queries:</p>
          <div className={styles.lineDiv}></div>
          <div className={styles.innerContentWrapper}>
            <div>
              <MailLogoSvg />
              <a href="mailto:events@mulearn.in">events@mulearn.in</a>
            </div>
            <div>
              <PhoneLogoSvg />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <a href="tel:+91 79940 43754">+91 79940 43754</a>
                <a href="tel:+91 94007 43624">+91 94007 43624</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
