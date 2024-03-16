import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";

const Team = () => {
  return (
		<>
			<Navbar />
			<div className={styles.teamWrapper}>
				<h1>Team</h1>
			</div>
			<Footer />
		</>
  );
}

export default Team