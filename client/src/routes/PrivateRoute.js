import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const { isLoading,  getPermissions } = useKindeAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!isLoading && getPermissions().orgCode !== "org_5f796b31434" ) {
        return (
            <main>
                You shouldn't be here I guess ;)
            </main>
        )
    }

    if (!isLoading && getPermissions().orgCode === "org_5f796b31434" ) {
        return <Outlet />
    }

}