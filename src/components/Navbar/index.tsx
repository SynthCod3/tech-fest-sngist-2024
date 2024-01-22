import styles from "./index.module.css";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { CgMenuLeft } from "react-icons/cg";
import NavModal from "./components/NavModal";
import { useState } from "react";

const Navbar = () => {
    const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

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
            <div className={styles.menu}>
                <CgMenuLeft onClick={() => setIsOpen(true)} />
                <NavModal isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
            <div className={styles.navMiddle}>
                <b>AGNIYATHRA &apos;24</b>
            </div>
            <div onClick={handleClick} className={styles.profile}>
                <img src="/profile.png" alt="Profile Picture" />
            </div>
        </div>
    );
};

export default Navbar;
