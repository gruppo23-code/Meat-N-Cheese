import {Navigate} from "react-router-dom";

export default function RequireAuth({children}) {
    const token = localStorage.getItem("accessToken");

    if (token) {
        return <Navigate to="/accesso-negato" replace />;
    }

    return children;        //Children rappresenta in react ciò che viene inserito tra i tag di un componente, è una prop speciale
}