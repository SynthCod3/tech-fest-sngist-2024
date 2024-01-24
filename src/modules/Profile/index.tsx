import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import Loader from "../../components/Loader";

const Profile = () => {
    const navigate = useNavigate();
	const [data, setData] = useState<User>();

    const handleLogout = async () => {
        toast.promise(supabase.auth.signOut(), {
            loading: "Logging out...",
            success: <b>Logout successful.</b>,
            error: <b>Error logging out</b>,
        });
        navigate("/signin");
    };

    const fetchProfile = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();
		if(user) {
			setData(user);
		}
		else {
			throw new Error("No user found");
		}
    };

	useEffect(() => {
		fetchProfile();
	}, []);

    return (
        <div className={styles.profileWrapper}>
            <Navbar />
            <div className={styles.logoutWrapper}>
                <div onClick={handleLogout}>Logout</div>
            </div>
            {data?.user_metadata ? (
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
                            <img src="/ghostboi.webp" alt="Profile Picture" />
                        </div>
                        <div className={styles.cardProfileDetails}>
                            <b>{data?.user_metadata?.name}</b>
                            <span>{data?.email}</span>
                        </div>
                    </div>
                    <div className={styles.cardEventsWrapper}>
                        <div className={styles.cardEventsDays}>
                            <span>DAY #1</span>
                            <span>DAY #2</span>
                        </div>
                        <div className={styles.cardEventsList}>
                            <b>REGISTERED EVENTS</b>
                            <span>1. Workshop &lt;AI&gt;</span>
                            <span>2. Hackathon &lt;Web&gt;</span>
                            <span>3. Competition &lt;Blind Coding&gt;</span>
                            <span>4. Workshop &lt;Web&gt;</span>
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
    );
};

export default Profile;
