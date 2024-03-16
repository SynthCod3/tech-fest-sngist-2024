
import styles from "./Faq.module.css";
import img from "./assets/Details.png";
import { ArrowUp, ArrowDown } from "./assets/svg";

type Props = {
  heading: string;
  para: string; // Assuming para is a string
  isOpen: boolean; // isOpen indicates whether the FAQ item is expanded or not
  onToggle: () => void; // onToggle is a function that toggles the isOpen state
};

const Faq = ({ heading, para, isOpen, onToggle }:Props) => {
  return (
    <div className={styles.faqContentWrapper}>
      <div
        style={{
          background: isOpen
            ? `url(${img})center center/cover no-repeat`
            : "#000",
        }}
        className={styles.Container}
      >
        <div className={styles.header}>
          <h1>{heading}</h1>
          <button onClick={onToggle}>
            {isOpen ? <ArrowUp /> : <ArrowDown />}
          </button>{" "}
        </div>

        {isOpen && (
          <div>
            <p>{para}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Faq;
