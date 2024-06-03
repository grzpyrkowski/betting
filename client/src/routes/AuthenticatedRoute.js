import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function AuthenticatedRoute() {

    const { isLoading, isAuthenticated, login } = useKindeAuth();

    if (isLoading) {
        return <div className="notification">Loading...</div>;
    }

    if (!isLoading && !isAuthenticated) {
        return (
            <main className="text-center">
                <h2 className="notification">Not Authenticated, you need to login</h2>
                <button className="notification btn border-white border-2 mt-3" onClick={login}>Login</button>
            </main>
        );
    }

    if (!isLoading && isAuthenticated) {
        return <Outlet />
    }

}