import { Route, Routes } from "react-router";
import Login from "../features/auth/pages/Login";
import Register from "../features/auth/pages/Register";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<div>404 Not Found</div>}></Route>
        </Routes>
    );
}