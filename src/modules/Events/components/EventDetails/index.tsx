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

	const user = JSON.parse(localStorage.getItem("user") as string);
	const handleRegister = () => {
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

	const checkUserEvent = async (email: string, eventId: string) => {
		const { data, error } = await supabase.rpc("check_user_event", {
			p_email: email,
			p_event_id: eventId,
		});
		if (error) {
			console.error("Error:", error);
			throw error.message;
		} else if (data === "No user found") {
			throw data;
		} else if (data === "User already registered") {
			throw data;
		} else if (data) {
			return data;
		}
	};

	const handleCheckUserEvent = () => {
		if (formData.members.length >= 5 && id === "hackathon") {
			toast.error("Maximum 5 members allowed");
			return;
		}

		// Check if the new member is already in the list
		if (formData.members.includes(newMember)) {
			toast.error("Member already added");
			return;
		}
		toast.promise(checkUserEvent(newMember, data?.id as string), {
			loading: "Loading...",
			success: (response) => {
				handleAddMember();
				return <b>{response} has been added!</b>;
			},
			error: (error) => {
				return <b>{error}</b>;
			},
		});
	};

	const insertEventUsers = async () => {
		const rowsToInsert = [];

		// Add the leader as the first row
		rowsToInsert.push(user.user.email);

		// Add each member to the rows array
		formData.members.forEach((memberEmail) => {
			rowsToInsert.push(memberEmail);
		});

		// Insert all rows at once
		const { data: eventInsert, error } = await supabase.rpc(
			"insert_event_users",
			{
				p_emails: rowsToInsert,
				p_event_id: data?.id,
				p_team_name: formData.teamName,
			}
		);
		if (error) {
			console.error("Error:", error);
			throw error.message;
		} else {
			setIsOpen(false);
			setFormData({
				...formData,
				members: [],
				teamName: "",
			});
			return eventInsert;
		}
	};

	const handleSubmit = async () => {
		if (formData.members.length === 0) {
			toast.error("Please add members");
		} else {
			toast.promise(insertEventUsers(), {
				loading: "Loading...",
				success: () => {
					setIsOpen(false); // Close the modal
                setFormData({  // Clear the form data
                    teamName: "",
                    members: [],
                });
					return <b>Registered successfully</b>;
				},
				error: (error) => {
					return <b>{error}</b>;
				},
			});
		}
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
												console.log("clicked");
												if (!user) {
													toast.error(
														"Please login to register"
													);
													return;
												}
												toast.promise(
													checkUserEvent(
														user?.user
															.email as string,
														data?.id as string
													),
													{
														loading: "Loading...",
														success: (response) => {
															setIsOpen(true);
															return (
																<b>
																	{response}{" "}
																	has been
																	added!
																</b>
															);
														},
														error: (error) => {
															return (
																<b>{error}</b>
															);
														},
													}
												);
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
											Team lead:{" "}
											{user?.user?.user_metadata.name}
										</div>
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
											<button
												onClick={handleCheckUserEvent}
											>
												add
											</button>
										</div>
										<div className={styles.submitButton}>
											<button onClick={handleSubmit}>
												Submit
											</button>
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
