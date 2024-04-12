import {useContext} from "react";
import {UserContext} from "../contexts/user.context";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import Login from "./Login";

export const PrivateRoute = () => {
    const {user} = useContext(UserContext);
    const location = useLocation();
    const redirectLoginUrl = `/login?redirectTo=${encodeURI(location.pathname)}`;

    return !user ? <Navigate to={<Login />} /> : <Outlet />;
}