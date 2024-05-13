import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import {Navigate} from "react-router-dom";

export default function Admin( {user} ) {
    const { getPermissions } = useKindeAuth();

    if (user !== "Admin") {
        return <Navigate to={'/'} replace />
    }

    console.log(getPermissions())


    return (
        <>
        </>
    )
}