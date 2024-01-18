import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Toaster } from "react-hot-toast";
import NotFound from "./modules/NotFound";
import Home from "./modules/Home";
import SignIn from "./modules/Auth/SignIn";
import Navbar from "./components/Navbar";

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
            element: <Home/>,
        },
        {
            path: "/login",
            element: <SignIn />,
        },
        // {
        //     path: "/",
        //     element: <PrivateRoute />,
        //     children: [
        //         {
        //             path: "/",
        //             element: <Dashboard />,
        //         },

        //         {
        //             path: "/",
        //             element: (
        //                 <RoleChecker allowedRoles={[Roles.ADMIN, Roles.DC]} />
        //             ),
        //             children: [
        //                 {
        //                     path: "intern",
        //                     element: <InternManagement />,
        //                 },
        //                 {
        //                     path: "intern/:id",
        //                     element: <Dashboard />,
        //                 },
        //                 {
        //                     path: "idea",
        //                     element: <Idea />,
        //                 },
        //             ],
        //         },
        //     ],
        // },
    ]);
    return (
        <div className="App">
            <Navbar />
            <div className="page">
                <RouterProvider router={router} />
                <Toaster position="bottom-center" reverseOrder={false} />
            </div>
        </div>
    );
}

export default App;
