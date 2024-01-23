import { useState } from "react";
import styles from "../index.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";
import { HeroBgLeft, HeroBgRight } from "../../Home/components/svgComponents";

const SignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

	const handleSignIn = async () => {
		let { data: res, error } = await supabase.auth.signInWithPassword(
            data
        );
        if (error) {
            throw error.message
        } else {
            return res
        }
	}

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(data).some(
            (value) => value.trim() === ""
        );
        if (isAnyFieldEmpty) {
            toast.error("Please fill out all fields.");
            return;
        }

        toast.promise(handleSignIn(), {
            loading: "Signing in...",
            success: () => {
                navigate("/profile");
                return <b>Signed in successfully</b>;
            },
            error: (error) => {
                return <b>{error}</b>;
            },
        });
        
    };

    return (
        <div className={styles.signInWrapper}>
            <div className={styles.heroBgElements}>
                <HeroBgLeft className={styles.heroBgLeft} />
                <HeroBgRight className={styles.heroBgRight} />
            </div>
            <div className={styles.signInCard}>
                <b>Welcome Back</b>
                <span>
                    Don&apos;t have an account yet? &nbsp;
                    <a href="/signup">Sign up</a>
                </span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type="email"
                        placeholder="email address"
                        onChange={(e) =>
                            setData({ ...data, email: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="••••••••"
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
