import { useEffect, useState } from "react";
import { supabase } from "../../utils/supabase";
import styles from "./index.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Card from "../../components/Card";

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
                <div className={styles.filters}>
                    <Button text="ALL" />
                    <Button text="HACKATHON" />
                    <Button text="WORKSHOP" />
                    <Button text="COMPETITION" />
                </div>
                <div className={styles.eventContainer}>
                    {data.length > 0 ? (
                        data.map((event) => (
                            <Card
                                key={event.id}
                                name={event.name}
                                link={event.image}
                            />
                        ))
                    ) : (
                        <Loader />
                    )}
                </div>
            </div>
        </>
    );
};

export default Events;
