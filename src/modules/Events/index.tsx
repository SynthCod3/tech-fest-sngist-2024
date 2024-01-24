import { useEffect } from "react";
import { supabase } from "../../utils/supabase";
import Cards from "./components/Cards";
import styles from "./index.module.css";
const Events = () => {
    async function fetchData() {
        let { data: events, error } = await supabase
            .from("event_user_link")
            .select(
                "user_id, event_id, events(name), user_view(email, raw_user_meta_data)"
            )
            // Filters
            .eq("event_id", "b3665aec-3107-4ba1-86a9-03af4a70bb40");
        if (events) {
            console.log(events);
            return events;
        } else if (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className={styles.eventContainer}>
                <Cards />
            </div>
        </div>
    );
};

export default Events;
