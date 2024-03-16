import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import amalcp from "./assets/amalcp.png";

const Team = () => {
  const data = [
    {
      image: amalcp,
      name: "Amal C P",
      designation: "President",
    },
    {
      image: amalcp,
      name: "Amal C P",
      designation: "President",
    },
    {
      image: amalcp,
      name: "Amal C P",
      designation: "President",
    },
    {
      image: amalcp,
      name: "Amal C P",
      designation: "President",
    },
    {
      image: amalcp,
      name: "Amal C P",
      designation: "President",
    },
  ];
  return (
    <>
      <Navbar />
      <div className={styles.OuterteamWrapper}>
        <h1>Team</h1>
        <div className={styles.teamWrapper}>
          <div className={styles.remyaSection}>
            <div className={styles.box}>
              <img src={amalcp} alt="" />
              <div
                className={styles.nameTagTeam}
                style={{ background: "none" }}
              ></div>
            </div>
            <div className={styles.remyaSectionContent}>
              <h2>Dr. Remya K Sasi</h2>
              <p>HOD, Department of CSE</p>
              <p>Faculty-in-Charge,</p>
              <p>Community Of Developers (CODe)</p>
            </div>
          </div>
          <div className={styles.containerTeam}>
            {data.map((item, index) => (
              <div key={index} className={styles.box}>
                {" "}
                <img src={item.image} alt={item.name} />{" "}
                <div className={styles.nameTagTeam}>
                  <div className={styles.nameTeam}>
                    <p className={styles.nameTeamMember}>{item.name}</p>{" "}
                    <p className={styles.positionTeamMember}>{item.designation}</p>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
