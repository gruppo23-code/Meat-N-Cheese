// Protegge le rotte accessibili solo se autenticati
import { Navigate } from "react-router-dom";

export default function RequireUser({ children }) {
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Navigate to="/accesso-negato" replace />;
    }

    return children;
}