import { useState } from "react";
import Button from "../../../../../components/Button";
import styles from "../index.module.css";

type Props = {
  data: Event;
};

const EventDetailsInfo = ({ data }: Props) => {
  const [payment, SetPayemnt] = useState(false);
  const handlepayment = () => {
    SetPayemnt(!payment);
  };
  return (
    <>
      <div className={styles.detailsContainer}>
        <span className={styles.title}>{data.tagline}</span>
        <span className={styles.normal}>{data.description}</span>
      </div>
      <div className={styles.detailsContainer}>
        {data.pool && (
          <span className={styles.bold}>
            Prize Pool:
            <span className={styles.normal}> ₹{data.pool}</span>
          </span>
        )}
        <span className={styles.bold}>
          Reg Fee:
          <span className={styles.normal}> ₹{data.fee}</span>
        </span>
        <span className={styles.bold}>
          Last Date to Register:
          <span className={styles.normal}> {data.end_date}</span>
        </span>
      </div>
      <div className={styles.bottomWrapperCard}>
        <div className={styles.detailsContainer}>
          <span className={styles.title}>Coodinator Details</span>
          {data.coordinators.map((coordinator) => (
            <div>
              <span className={styles.bold}>{coordinator.name}:</span>
              <span className={styles.normal}> {coordinator.phone}</span>
            </div>
          ))}
        </div>
        <div>
          {data.payment && <div onClick={handlepayment}>
            <Button text="Payment QR" />
          </div>}
          {payment && (
            <div onClick={handlepayment} className={styles.popUpContainer}>
              <img src={data.payment} alt="payment QR" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EventDetailsInfo;
