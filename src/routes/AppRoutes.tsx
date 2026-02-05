import { Route, Routes } from "react-router";
import Login from "../features/auth/pages/Login";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/*" element={<div>404 Not Found</div>}></Route>
        </Routes>
    );
}