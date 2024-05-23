import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function AuthenticatedRoute() {

    const { isLoading, isAuthenticated, login } = useKindeAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && !isAuthenticated) {
        return (
            <div>
                <div>Not Authenticated, you need to login</div>
                <button onClick={login}>Login</button>
            </div>
        );
    }

    if (!isLoading && isAuthenticated) {
        return <Outlet />
    }

}