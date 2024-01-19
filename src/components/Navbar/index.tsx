import styles from "./index.module.css";
import profilePicture from "../../assets/react.svg";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Navbar = () => {
    const navigate = useNavigate();
    async function handleClick() {
        const session = await supabase.auth.getSession();
        if (session.data.session?.access_token) {
            navigate("/profile");
        } else {
            let { error } = await supabase.auth.signOut();
			if (error) {
				toast.error("Error signing out:");
			}
            navigate("/signin");
        }
    }

    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logoWrapper}>
                <img src="/vite.svg" alt="Logo" />
            </div>
            <div className={styles.NavbarContents}>
                <a href={"/"}>Home</a>
                <a href={"/hackathon"}>Hackathon</a>
                <a href={"/competitions"}>Competitions</a>
                <a href={"/workshops"}>Workshops</a>
                <a href={"/contact"}>Contact</a>
                <div onClick={handleClick}>
                    <img src={profilePicture} alt="Profile Picture" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
