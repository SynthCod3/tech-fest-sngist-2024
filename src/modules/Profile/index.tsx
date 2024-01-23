import toast from "react-hot-toast";
import { supabase } from "../../utils/supabase";
import { useNavigate } from "react-router-dom";

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
        <div>
			<div>
				<button onClick={handleLogout}>Logout</button>
			</div>
            <div>Test</div>
        </div>
    );
};

export default Profile;
