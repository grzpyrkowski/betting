import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading } = useKindeAuth();

    if (isLoading) {
        return <p>Loading</p>;
    }

    const username = user.email.split('@');

    return (
        <div>
            {
                isAuthenticated ?
                    <div>
                        <h2>Hello, {username[0]}</h2>
                    </div> :
                    <p>Please sign in or register!</p>
            }
        </div>
    );
};