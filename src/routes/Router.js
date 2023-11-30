import { lazy } from "react";
import { Navigate } from "react-router-dom";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));
// Pages
const Home = lazy(() => import("../views/Home/Home.js"));
const Start = lazy(() => import("../views/Start/Start.js"));
const NoPage = lazy(() => import("../views/NoPage.js"));

const Routes = [
    {
        path: "/",
        element: <FullLayout />,
        children: [
            { path: "/", element: <Navigate to="/home" /> },
            { path: "/home", exact: true, element: <Home /> },
            { path: "/start", exact: true, element: <Start /> },
            { path: "*", exact: true, element: <NoPage /> }
        ]
    }
];
export default Routes;