import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import Cards from "./components/Cards";
import styles from "./index.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";

const Events = () => {
  const [data, setData] = useState<Event[]>([]);

  async function fetchData() {
    let { data: events, error } = await supabase.from("events").select("*");

    if (events) {
      setData(events);
    } else if (error) {
      throw error;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
        <>
            <Navbar />
            <Header title="Events" />
        <div className={styles.eventsWrapper}>
          <div className={styles.eventContainer}>
        {data.length > 0 ? (
              {/* data.map((event) => <Cards key={event.id} {...event} />)
        ) : (
          <Loader /> */}
                    He
                </div>
        )}
      </div>
    </>
  );
};

export default Events;
