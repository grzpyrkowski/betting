import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../data/globalConsts";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading } = useKindeAuth();
    const [points, setPoints] = useState([]);
    const [bets, setBets] = useState([]);
    const [matches, setMatches] = useState([]);

    const username = user.email.split('@');
    let usersBets, usersPoints = null;

    const Bet = (props) => {
        return (
            <>
                {
                    (bets.length !== 0) ?
                            <div>
                                <p>{props.scoreA}</p>
                                <p>{props.scoreB}</p>
                                <p>{props.points_value}</p>
                                {
                                    matches
                                        .filter(match => match._id === props.match_id)
                                        .map(match => (
                                            <div key={match.id}>
                                                <div>{match.teamA} - {match.teamB}</div>
                                            </div>
                                        ))
                                }
                            </div>
                        :
                        <div> You have no bets yet! </div>
                }
            </>
        );
    }

    useEffect(() => {
        axios.get(`${baseUrl}api/points`)
            .then((data) => {
                setPoints(data.data);
            });
        axios.get(`${baseUrl}api/bets`)
            .then((data) => {
                setBets(data.data);
            });
        axios.get(`${baseUrl}api/matches`)
            .then((data) => {
                setMatches(data.data);
            });
    }, [user.id]);

    if (isLoading) {
        return <p>Loading</p>;
    }

    try {
        usersBets = bets
            .filter(bet => bet.user_id === user.id)
            .map(bet => (
                <Bet
                    key={bet._id}
                    scoreA={bet.scoreA}
                    scoreB={bet.scoreB}
                    match_id={bet.match_id}
                />
            ))
    } catch (err) {
        console.error(err);
    }

    try {
        usersPoints = points
            .filter(point => point.user_id === user.id)
            .map(point => {
                if (Number.isInteger(point.amount)) {
                    return point.amount
                } else {
                    return 0
                }
            })
    } catch (err) {
        console.error(err);
    }

    return (
        <div>
            {
                isAuthenticated ?
                    <div>
                        <h2>Hello {username[0]} currently you have {usersPoints} points.</h2>
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