import { Navigate } from "react-router-dom";

export default function RequireAdmin({ children }) {
    const token = localStorage.getItem("accessToken");
    const ruolo = localStorage.getItem("ruolo");

    if (!token || ruolo !== "admin") {
        return <Navigate to="/accesso-negato" replace />;
    }

    return children;
}