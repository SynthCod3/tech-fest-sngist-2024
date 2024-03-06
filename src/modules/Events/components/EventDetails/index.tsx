import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import Navbar from "../../../../components/Navbar";
import { supabase } from "../../../../utils/supabase";
import { useParams } from "react-router-dom";
import Loader from "../../../../components/Loader";
import Footer from "../../../../components/Footer";
import styles from "./index.module.css";
import EventDetailsInfo from "./components/EventDetails";
import Button from "../../../../components/Button";
import toast from "react-hot-toast";
import { User } from "@supabase/supabase-js";
import EventRules from "./components/EventRules";
import Modal from "../../../../components/Modal";

type TeamForm = {
	teamName: string;
	members: string[];
};

const EventDetails = () => {
	const { id } = useParams();
	const [data, setData] = useState<Event>();
	const [isOpen, setIsOpen] = useState(false);
	const [formData, setFormData] = useState<TeamForm>({
		teamName: "",
		members: [],
	});
	const [newMember, setNewMember] = useState("");

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

	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 600);
		};

		window.addEventListener("resize", handleResize);

		// Cleanup the event listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const register = async (user: User) => {
		let { data: event_user_link, error } = await supabase
			.from("event_user_link")
			.select("*")

			// Filters
			.eq("event_id", data?.id)
			.eq("user_id", user.id);

		if (event_user_link && event_user_link?.length === 0) {
			const { data: eventLink, error } = await supabase
				.from("event_user_link")
				.insert([{ event_id: data?.id, user_id: user.id }])
				.select();
			if (error) {
				throw error.message;
			}
			if (eventLink) {
				return "Registered successfully";
			}
		} else if (event_user_link && event_user_link?.length > 0) {
			throw "Already Registered";
		} else if (error) {
			throw error.message;
		} else {
			throw "Something went wrong";
		}
	};

	const handleRegister = () => {
		const user = JSON.parse(localStorage.getItem("user") as string);
		if (user) {
			toast.promise(register(user.user), {
				loading: "Loading...",
				success: (response) => {
					return <b>{response}</b>;
				},
				error: (error) => {
					return <b>{error}</b>;
				},
			});
		} else {
			console.log("Please login to register");
			toast.error("Please login to register");
		}
	};

	const handleAddMember = () => {
		setFormData({
			...formData,
			members: [...formData.members, newMember],
		});
		setNewMember("");
	};

	return (
		<>
			<Navbar />
			{isSmallScreen ? (
				<Header title={data?.name as string} size={"20vw"} />
			) : (
				<Header title={data?.name as string} />
			)}

			<div className={styles.eventDetailsWrapper}>
				{data ? (
					<div>
						<div className={styles.eventDetailsCard}>
							{/* Left side of card  */}
							<div className={styles.imageContainer}>
								<img src={data.image} alt={data.name} />
							</div>

							{/* Right side of card  */}
							<div className={styles.eventDetails}>
								<EventDetailsInfo data={data} />
								<div className={styles.buttonContainer}>
									{id === "hackathon" ? (
										<Button
											text="Register"
											width={
												isSmallScreen ? "75vw" : "45vw"
											}
											onClick={() => {
												setIsOpen(true);
											}}
										/>
									) : (
										<Button
											text="Register"
											width={
												isSmallScreen ? "75vw" : "45vw"
											}
											onClick={handleRegister}
										/>
									)}
									<Modal
										isOpen={isOpen}
										onClose={() => {
											setIsOpen(false);
										}}
									>
										<h2>Team Registeration</h2>
										<input
											type="text"
											placeholder="team name"
											onChange={(e) => {
												setFormData({
													...formData,
													teamName: e.target.value,
												});
											}}
										/>
										<div
											className={styles.membersContainer}
										>
											{formData.members.map(
												(member, index) => (
													<div
														key={index}
														className={
															styles.member
														}
													>
														<div>{member}</div>
														<span
															className={
																styles.removeButton
															}
															onClick={() => {
																const updatedMembers =
																	formData.members.filter(
																		(
																			_,
																			i
																		) =>
																			i !==
																			index
																	);
																setFormData({
																	...formData,
																	members:
																		updatedMembers,
																});
															}}
														>
															x
														</span>
													</div>
												)
											)}
										</div>
										<div className={styles.memberInput}>
											<input
												type="text"
												placeholder="member email"
												value={newMember}
												onChange={(e) => {
													setNewMember(
														e.target.value
													);
												}}
											/>
											<button onClick={handleAddMember}>
												add
											</button>
										</div>
										<div className={styles.submitButton}>
											<button>Submit</button>
										</div>
									</Modal>
								</div>
							</div>
						</div>
						{/* rules section  */}
						<div className={styles.rulesWrapper}>
							<EventRules data={data} />
						</div>
					</div>
				) : (
					<Loader />
				)}
			</div>
			<Footer />
		</>
	);
};

export default EventDetails;
