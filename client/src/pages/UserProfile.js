import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading, getPermission, getPermissions, getUserOrganizations, getClaim } = useKindeAuth();

    if (isLoading) {
        return <p>Loading</p>;
    }

    const username = user.email.split('@');

    console.log(getPermission("create:match"));
    console.log(getPermissions());
    console.log(getClaim("roles"));

    return (
        <div>
            {
                isAuthenticated ?
                    <div>
                        <h2>{username[0]}</h2>
                    </div> :
                    <p>Please sign in or register!</p>
            }
        </div>
    );
};