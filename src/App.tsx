import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import NotFound from "./modules/NotFound";
import Home from "./modules/Home";
import SignIn from "./modules/Auth/SignIn";
import SignUp from "./modules/Auth/SignUp";
import Events from "./modules/Events";
import Profile from "./modules/Profile";
import { PrivateRoute } from "./services/PrivateRoute";
import EventDetails from "./modules/Events/components/EventDetails";
import PaymentStatus from "./modules/Admin/PaymentStatus";
import { RoleChecker } from "./services/RoleChecker";
import { Roles } from "./services/Roles";
import Admin from "./modules/Admin";
import { Analytics } from "@vercel/analytics/react";
import Contacts from "./modules/Contacts";

function App() {
	const router = createBrowserRouter([
		{
			path: "*",
			element: <NotFound />,
		},
		{
			path: "/404",
			element: <NotFound />,
		},
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/events",
			element: <Events />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/contacts",
			element: <Contacts />,
		},
		{
			path: "/events/:id",
			element: <EventDetails />,
		},
		{
			path: "/profile/:id",
			element: <Profile />,
		},
		{
			path: "/",
			element: <PrivateRoute />,
			children: [
				{
					path: "/profile",
					element: <Profile />,
				},
				{
					path: "/",
					element: <RoleChecker allowedRoles={[Roles.ADMIN]} />,
					children: [
						{
							path: "/payment-status",
							element: <Admin />,
						},
						{
							path: "/payment-status/:id",
							element: <PaymentStatus />,
						},
					],
				},
			],
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
			<Analytics />
			<Toaster
				position="bottom-center"
				reverseOrder={false}
				toastOptions={{
					// success: {
					// 	style: {
					// 		background: "var(--border)",
					// 		color: "var(--foreground)",
					// 	},
					// },
					// error: {
					// 	style: {
					// 		background: "var(--border)",
					// 		color: "var(--foreground)",
					// 		display: "flex",
					// 		justifyContent: "center",
					// 		alignItems: "center",
					// 	},
					// },
				}}
			/>
		</div>
	);
}

export default App;
