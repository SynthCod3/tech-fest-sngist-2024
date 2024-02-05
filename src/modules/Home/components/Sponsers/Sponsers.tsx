import styles from "./Sponsers.module.css"

const Sponsers = () => {
  return (
    <div className={styles.sponsersWrapper}>
      <div className={styles.sponsersCard}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="Sponsers"
          height="3rem"
          width="3rem"
        />
        <span>Sponsers1</span>
      </div>
    </div>
  )
}

export default Sponsers