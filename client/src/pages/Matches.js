import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import {baseUrl} from "../globalConsts";
import add from "../data/matches/add.png"

export default function Matches() {
    const [matches, setMatches] = useState([])
    const { isAuthenticated, getPermissions } = useKindeAuth();

    let upcomingMatches, pendingMatches, finishedMatches = null;

    const Match = (props) => {
        return (
            <>
                {
                    (!props.disabled) ?
                        <Link to={`/matches/${props.id}/bet`} className="match bg-slate-400 px-10 py-5 my-4 rounded-xl flex place-content-between uppercase">
                            <div className="teams">
                                <div>{props.teamA} - {props.teamB}</div>
                            </div>
                            <div className="date">
                                <p>{props.date}, {props.time}</p>
                            </div>
                            <div className="state">
                                <p>{props.status}</p>
                            </div>
                        </Link>
                        :
                        <div className="bg-slate-400 px-10 py-5 my-4 rounded-xl flex place-content-between uppercase">
                            <div className="teams">
                                <div>{props.teamA} - {props.teamB}</div>
                            </div>
                            <div className="date">
                                <p>{props.date}, {props.time}</p>
                            </div>
                            <div className="state">
                                <p>{props.status}</p>
                            </div>
                            { isAuthenticated ?
                                <>
                                    {
                                        getPermissions().orgCode === "org_5f796b31434" ?
                                            <div className="ml-2">
                                                <Link to={`/matches/${props.id}/score`}>
                                                    <button><img src={add} alt="add"/></button>
                                                </Link>
                                            </div>
                                            : <></>
                                    }
                                </>
                                : <></>
                            }
                        </div>
                }
            </>
        );
    }

    useEffect(() => {
        axios.get(`${baseUrl}api/matches`)
            .then((data) => {
                setMatches(data.data);
            });
    }, []);


    try {
         upcomingMatches = matches
             .filter(match => match.status === "not started")
             .map(match => (
                <Match
                    key={match._id}
                    id={match._id}
                    date={match.date.slice(0, 10)}
                    time={match.date.slice(11, 16)}
                    status={match.status}
                    teamA={match.teamA}
                    teamB={match.teamB}
                />
        ));
    } catch (err) {
        console.error(err);
    }

    try {
        pendingMatches = matches
            .filter(match => match.status === "pending")
            .map(match => (
            <Match
                key={match._id}
                id={match._id}
                date={match.date.slice(0, 10)}
                time={match.date.slice(11, 16)}
                status={match.status}
                teamA={match.teamA}
                teamB={match.teamB}
                disabled={true}
            />
        ));
    } catch (err) {
        console.error(err)
    }

    try {
        finishedMatches = matches
            .filter(match => match.status === "finished")
            .map(match => (
            <Match
                key={match._id}
                date={match.date.slice(0, 10)}
                time={match.date.slice(11, 16)}
                status={match.status}
                teamA={match.teamA}
                teamB={match.teamB}
                disabled={true}
            />
        ))
    } catch (err) {
        console.error(err)
    }

    return (
        <main>
            <div className="text-center my-10">
                <h1>Upcoming matches</h1>
            </div>
            <div>
                {upcomingMatches}
            </div>
            <div className="text-center my-10">
                <h1>Pending matches</h1>
            </div>
            <div>
                {pendingMatches}
            </div>
            <div className="text-center my-10">
                <h1>Finished matches</h1>
            </div>
            <div>
                {finishedMatches}
            </div>
        </main>
    )
}