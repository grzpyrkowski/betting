import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { Outlet } from "react-router-dom";

export default function PrivateRoute() {
    const { isLoading,  getPermissions } = useKindeAuth();

    if (isLoading) {
        return <div>Loading...</div>;
    }

    // if (!isLoading && !getPermissions().orgCode === "org_5f796b31434") {
    //     return (
    //         <div>
    //             <div>Not to see here, regular user!</div>
    //         </div>
    //     )
    // }

    if (!isLoading && getPermissions().orgCode === "org_5f796b31434" ) {
        return <Outlet />
    }

}