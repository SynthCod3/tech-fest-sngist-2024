import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Navbar from "../../../../components/Navbar";
import { supabase } from "../../../../utils/supabase";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import Footer from "../../../../components/Footer";
import styles from "./index.module.css";

const EventDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState<Event>();

    async function fetchData() {
        let { data: events, error } = await supabase
            .from("events")
            .select("*")
            .eq("url", id);

        if (events) {
            setData(events[0]);
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
            <Header title={data?.name as string} />
            <div className={styles.eventDetailsWrapper}>{data ? <div>
				<div></div>
			</div> : <Loader />}</div>
            <Footer />
        </>
    );
};

export default EventDetails;
