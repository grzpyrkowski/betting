import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../globalConsts";
import {useNavigate} from "react-router-dom";

export default function UserProfile() {
    const { user, isAuthenticated, isLoading } = useKindeAuth();
    const [points, setPoints] = useState([]);
    const [bets, setBets] = useState([]);
    const [matches, setMatches] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    let usersBets, usersPoints, username = null;

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
                setPoints(data.data.filter(point => point.user_id === user.id));
            });
        axios.get(`${baseUrl}api/bets`)
            .then((data) => {
                setBets(data.data);
            });
        axios.get(`${baseUrl}api/matches`)
            .then((data) => {
                setMatches(data.data);
            });
        axios.get(`${baseUrl}api/users`)
            .then((data) => {
                setUsers(data.data);
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
        let amount = points.filter(point => point.user_id === user.id)
        if (amount.length === 0) {
            usersPoints = (
                <div>
                    <span>It seems you have no points now! Get your first 50 now! </span>
                    <br/>
                    <br/>
                    <button onClick={getFirstPoints}> -> Get first 50 points</button>
                    <br/>
                </div>
            )
        } else {
            usersPoints = `Currently you have ${amount[0].amount} points.`
        }
    } catch (err) {
        console.error(err);
    }

    try {
        username = users
            .filter(name => name.kinde_user_id === user.id)
            .map(name => {
                return name.username
        })
    } catch (err) {
        console.error(err);
    }

    function getFirstPoints() {
        try {
            axios.post(`${baseUrl}api/points`, {
                amount: 50,
                user_id: user.id,
            });
        } catch (err) {
            console.error(err);
        }
        navigate(0);
    }

    return (
        <div>
            {
                isAuthenticated ?
                    <div>
                        Hello {username}! {usersPoints}
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