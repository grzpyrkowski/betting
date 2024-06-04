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
                            <div className="scores-panel mt-2.5">
                                {
                                    matches
                                        .filter(match => match._id === props.match_id)
                                        .map(match => (
                                            <div className="my-2 flex place-content-between items-center" key={match.id}>
                                                <div className="w-3/5 sm:w-4/5 md:flex sm:place-content-between">
                                                    <span>{match.teamA} </span>
                                                    <span>{props.scoreA} - {props.scoreB}</span>
                                                    <span> {match.teamB}</span>
                                                </div>
                                                <div className="">{props.points_value} points</div>
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
                    points_value={bet.points_value}
                />
            ))
    } catch (err) {
        console.error(err);
    }

    try {
        let amount = points.filter(point => point.user_id === user.id)
        if (amount.length === 0) {
            usersPoints = (
                <button className="scores-panel btn" onClick={getFirstPoints}>Get 50 points</button>
            )
        } else {
            usersPoints = (<div className="points pl-4 pr-3"> <p className="text-4xl -mb-1">{amount[0].amount}</p> points </div>)
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
        <main className="users-bets">
            {
                isAuthenticated ?
                    <>
                        Hello {username}!
                        <div className="mt-5">
                            <div className="flex place-content-between">
                                <div className="scores-panel mr-2.5 flex items-center grow uppercase">
                                    <p className="mx-auto md:text-xl">Your bets</p>
                                </div>
                                {usersPoints}
                            </div>
                            {usersBets}
                        </div>


                    </> :
                    <p>Please sign in or register!</p>
            }
        </main>
    );
}