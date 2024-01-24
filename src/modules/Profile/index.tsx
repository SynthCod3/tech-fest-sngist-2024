import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import Footer from "../../components/Footer";

const Profile = () => {
    const navigate = useNavigate();
    const [data, setData] = useState<UserEvent[]>([]);
    const [day, setDay] = useState(1);

    const handleLogout = async () => {
        toast.promise(supabase.auth.signOut(), {
            loading: "Logging out...",
            success: <b>Logout successful.</b>,
            error: <b>Error logging out</b>,
        });
        navigate("/signin");
    };

    async function fetchData() {
        let userId = JSON.parse(localStorage.getItem("user") as string);
        let { data: user, error } = await supabase
            .from("event_user_link")
            .select(
                "user_id, event_id, payment, events(name, date, category), user_view(email, raw_user_meta_data)"
            )
            // Filters
            .eq("user_id", userId.user.id);
        if (user) {
            setData(user as unknown as UserEvent[]);
            return user;
        } else if (error) {
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className={styles.profileWrapper}>
                <Navbar />
                <div className={styles.logoutWrapper}>
                    <div onClick={handleLogout}>Logout</div>
                </div>
                {data.length > 0 ? (
                    <div className={styles.profileCard}>
                        <div className={styles.cardTop}>
                            <span className={styles.cardTopTitle}>
                                WEBSYNC &nbsp;
                            </span>
                            <hr />
                            <span>&nbsp;ENTRY PASS</span>
                        </div>
                        <div className={styles.cardProfile}>
                            <div className={styles.cardProfileWrapper}>
                                <img
                                    src="/ghostboi.webp"
                                    alt="Profile Picture"
                                />
                            </div>
                            <div className={styles.cardProfileDetails}>
                                <b>
                                    {data[0].user_view.raw_user_meta_data.name}
                                </b>
                                <span>{data[0].user_view.email}</span>
                            </div>
                        </div>
                        <div className={styles.cardEventsWrapper}>
                            <div className={styles.cardEventsDays}>
                                <span
                                    onClick={() => setDay(1)}
                                    className={`${
                                        day === 1 ? styles.selectedDay : ""
                                    }`}
                                >
                                    DAY #1
                                </span>
                                <span
                                    onClick={() => setDay(2)}
                                    className={`${
                                        day === 2 ? styles.selectedDay : ""
                                    }`}
                                >
                                    DAY #2
                                </span>
                            </div>
                            <div className={styles.cardEventsList}>
                                <b>REGISTERED EVENTS</b>
                                {data.some(
                                    (event) => event.events.date === day
                                ) ? (
                                    data.map((event, index) => {
                                        if (event.events.date === day) {
                                            return (
                                                <span key={index}>
                                                    {index + 1}.{" "}
                                                    {event.events.category} &lt;
                                                    {event.events.name}&gt;
                                                    <span>
                                                        {event.payment
                                                            ? ""
                                                            : " <Payment pending>"}
                                                    </span>
                                                </span>
                                            );
                                        }
                                        return null;
                                    })
                                ) : (
                                    <span>No events</span>
                                )}
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.cardFooterLeft}>
                                <span>EVENT ADMISSION</span>
                                <b>SNGIST TECH FEST</b>
                            </div>
                            <div className={styles.cardFooterRight}>
                                <img
                                    src="/logo.svg"
                                    width={60}
                                    alt="Logo"
                                    onClick={() => navigate("/")}
                                />
                                <span>biggest techfest in SNGIST</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <Loader />
                )}
                <div></div>
            </div>
            <Footer />
        </>
    );
};

export default Profile;
