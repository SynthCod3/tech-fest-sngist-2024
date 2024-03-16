import styles from './Partners.module.css'
import fundesign from './assets/fundesign.png'
import creative from './assets/Creartive.png'
import mulearn from './assets/µLearn.png'

type Props = {}

export const Partners = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <a href="https://fundesign.in" target="_blank">
        <img src={fundesign} alt="" />
      </a>{" "}
      <a href="https://fundesign.in" target="_blank">
        <img src={creative} alt="" />
      </a>
      <a href="https://mulearn.org" target="_blank">
        <img src={mulearn} alt="" />
      </a>
    </div>
  );
}