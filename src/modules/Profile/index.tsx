import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import styles from "./index.module.css"

const Profile = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		toast.promise(supabase.auth.signOut(), {
            loading: "Logging out...",
            success: <b>Logout successful.</b>,
            error: <b>Error logging out</b>,
        });
		navigate("/signin");
	}

    return (
        <div className={styles.profileWrapper}>
			<Navbar />
			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
            <div>Test</div>
        </div>
    );
};

export default Profile;
