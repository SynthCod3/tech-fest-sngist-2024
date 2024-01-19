// import { useNavigate } from "react-router-dom";
// import Button from "../../components/Button";
import styles from "./index.module.css";
// import { useEffect, useState } from "react";
import heroImage from "../../assets/hero.svg";
import Navbar from "../../components/Navbar";
import Flames from "./components/Flames";

const Home = () => {
    // const [data, setData] = useState<any>([]);
    // const navigate = useNavigate();

    // const fetchData = async () => {
    //     const {
    //         data: { users },
    //         error,
    //     } = await supabaseAdmin.auth.admin.listUsers({
    //         page: 1,
    //         perPage: 1000,
    //     });
    //     if (error) {
    //         console.error("Error fetching data:", error);
    //         return [];
    //     }
    //     setData(users);
    // };

    // useEffect(() => {
    //     fetchData();
    // }, []);
    return (
        <div className={styles.HomeWrapper}>
			<Navbar />
            <div className={styles.HeroWrapper}>
                <div className={styles.hero}>
                    <img src={heroImage} alt="no image available" />
                </div>

                {/* <div className={styles.HeroLeft}>
                    <h1>Register Now</h1>
                    <div className={styles.buttonWrapper}>
                        <Button
                            content="Sign up"
                            variant="primary"
                            onClick={() => {
                                navigate("/signup");
                            }}
                        />
                        <Button content="Explore" variant="outline" />
                    </div>
                </div>
                <div>
					<Flames />
				</div>
            </div>
        </div>
    );
};

export default Home;
