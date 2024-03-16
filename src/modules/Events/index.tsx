import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../../utils/supabase";
import styles from "./index.module.css";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Footer from "../../components/Footer";

function useQuery() {
	return new URLSearchParams(useLocation().search);
}

// Define the filter type explicitly for clarity and reuse
type FilterType = "all" | "hackathon" | "workshop" | "competition" | "game";

const Events = () => {
	const [data, setData] = useState<Event[]>([]);
	const query = useQuery();
	const urlFilter = query.get("filter");

	// Ensure urlFilter is a valid FilterType, default to "all" otherwise
	const [filter, setFilter] = useState<FilterType>(
		(urlFilter &&
		["all", "hackathon", "workshop", "competition", "game"].includes(
			urlFilter
		)
			? urlFilter
			: "all") as FilterType
	);

	async function fetchData() {
		let { data: events, error } = await supabase.from("events").select("*");

		if (events) {
			setData(events);
		} else if (error) {
			throw error;
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		setFilter(
			(urlFilter &&
			["all", "hackathon", "workshop", "competition", "game"].includes(
				urlFilter
			)
				? urlFilter
				: "all") as FilterType
		);
	}, [urlFilter]);

	return (
		<>
			<Navbar />
			<Header title="Events" />
			<div className={styles.eventsWrapper}>
				<div className={styles.filters}>
					<Button text="ALL" onClick={() => setFilter("all")} />
					<Button
						text="HACKATHON"
						onClick={() => setFilter("hackathon")}
					/>
					<Button
						text="WORKSHOP"
						onClick={() => setFilter("workshop")}
					/>
					<Button
						text="COMPETITION"
						onClick={() => setFilter("competition")}
					/>
					<Button text="GAME" onClick={() => setFilter("game")} />
				</div>
				<div className={styles.eventContainer}>
					{data.length > 0 ? (
						data.map((event) =>
							filter === "all" || filter === event.category ? (
								<Card
									key={event.id}
									name={event.name}
									link={event.image}
									url={`/events/${event.url}`}
								/>
							) : null
						)
					) : (
						<Loader />
					)}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Events;
