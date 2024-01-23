import { useState } from "react";
import styles from "../index.module.css";
import toast from "react-hot-toast";
import { supabase } from "../../../utils/supabase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const [data, setData] = useState({
        email: "",
        password: "",
        passwordConfirm: "",
        name: "",
        college: "",
        department: "",
        phone: "",
    });
	const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(data).some(
            (value) => value.trim() === ""
        );
        if (isAnyFieldEmpty) {
            toast.error("Please fill out all fields.");
            return;
        }

		if (data.password !== data.passwordConfirm) {
			toast.error("Passwords do not match");
			return;
		}

		if (data.phone.length !== 10) {
			toast.error("Phone number must be 10 digits");
		}

        const { data: _res, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    name: data.name,
					phone: data.phone,
                    college: data.college,
					department: data.department,
                },
            },
        });
        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Sign up successful");
			navigate("/profile");
        }
    };

    return (
        <div className={styles.signInWrapper}>
            <div className={styles.signInCard}>
                <b>Get Started</b>
                <span>
                    Already have an account? &nbsp;<a href="/signin">Sign in</a>
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
                        placeholder="password"
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                    />
                    <input
                        type="password"
                        placeholder="confirm password"
                        onChange={(e) =>
                            setData({
                                ...data,
                                passwordConfirm: e.target.value,
                            })
                        }
                    />
                    <input
                        type="text"
                        placeholder="full name"
                        onChange={(e) =>
                            setData({ ...data, name: e.target.value })
                        }
                    />
                    <input
                        type="number"
                        placeholder="whatsapp number"
                        onChange={(e) =>
                            setData({ ...data, phone: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="college"
                        onChange={(e) =>
                            setData({ ...data, college: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        placeholder="department"
                        onChange={(e) =>
                            setData({ ...data, department: e.target.value })
                        }
                    />
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
