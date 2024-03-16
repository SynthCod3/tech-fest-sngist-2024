import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import styles from "./index.module.css"
import contactsData from './data.json';


const Contacts = () => {

  return (
    <>
    <Navbar/>
    <div className={styles.contactWrapper}>
        <div className={styles.contactTitle}>Agreya'24</div>
        <div className={styles.contactContent}>
        {contactsData.map((contact) => (
            <div className={styles.contactCard}>
                <span>{contact.post}</span>
                <span>{contact.name}</span>
                <span>Ph no: +91{contact.phone}</span>
            </div>
        ))}
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contacts