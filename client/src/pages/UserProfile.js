import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import React, {useEffect, useState} from "react";
import axios from "axios";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading } = useKindeAuth();
    const [points, setPoints] = useState([])
    const [bets, setBets] = useState([])
    const [matches, setMatches] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/api/points`)
            .then((data) => {
                setPoints(data.data)
            });
        axios.get(`http://localhost:4000/api/bets`)
            .then((data) => {
                setBets(data.data);
            });
        axios.get(`http://localhost:4000/api/matches`)
            .then((data) => {
                setMatches(data.data);
            });
    }, []);

    if (isLoading) {
        return <p>Loading</p>;
    }

    let usersBets = bets.filter(bet => bet.user_id === user.id);
    let usersPoints = points.filter(point => point.user_id === user.id);

    try {
        if (usersPoints.length === 0) {
            usersPoints = "no points. You'll get first 50 after first bet!"
        } else {
            usersPoints.map(point => (
                <span key={point.id}>
                {point.amount} points.
            </span>
            ));
        }
    } catch (err) {
        console.error(err)
    }

    try {
        if (usersBets.length === 0) {
            usersBets = "You have no bets yet!";
        } else {
            usersBets.map(bet => (
                <div key={bet.id}>
                    <p>{bet.scoreA}</p>
                    <p>{bet.scoreB}</p>
                    <p>{bet.points_value}</p>
                    <p>{bet.match_id}</p>
                </div>
            ))
        }
    } catch (err) {
        console.error(err)
    }

    const username = user.email.split('@');

    return (
        <div>
            {
                isAuthenticated ?
                    <div>
                        <h2>Hello, {username[0]}, currently you have {usersPoints} </h2>
                        <div>
                            <p>Your bets:</p>
                            {usersBets}
                        </div>
                    </div> :
                    <p>Please sign in or register!</p>
            }
        </div>
    );
}