import { Routes, Route, Navigate } from 'react-router-dom';
import Home from "../views/Home/Home.js";
import Start from "../views/Start/Start.js";
import Tests from "../views/Tests.js";
import Questions from "../views/Questions.js";
import NoPage from "../views/NoPage.js";
import FullLayout from "../layouts/FullLayout.js";

const AppRoutes = (
    <Routes>
        <Route path="/" element={<FullLayout />} >
            <Route path="/home" element={<Home />} >
                <Route path="/home/tests" element={<Tests />} />
                <Route path="/home/questions" element={<Questions />} />
            </Route>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/start" element={<Start />} />
            <Route path="*" element={<NoPage />} />
        </Route>
    </Routes>
);

export default AppRoutes;