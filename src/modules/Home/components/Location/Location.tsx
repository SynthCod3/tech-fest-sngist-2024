import styles from "./Location.module.css";

type Props = {};

export const Location = (_props: Props) => {
	return (
		<div id="Venue" className={styles.LocationCard}>
			<div className={styles.locationWrapper}>
				<div className={styles.infoContainer}>
					<img
						src="/sngist.png"
						alt="Logo"
					/>
					<div className={styles.infosection}>
						<h1>Techfest Venue</h1>
						<p>
							SNGIST GROUP OF INSTITUTIONS,<br></br>N. Paravur,
							Manjali,
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
		
		</div>
	);
};
