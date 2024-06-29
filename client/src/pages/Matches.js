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
                    <Link to={`/matches/${props.id}/bet`} className="match">
                        <div className="teams grow w-3/4">
                            <p>{props.teamA} - {props.teamB}</p>
                            <p>{props.day}.{props.month}, {props.time}</p>
                        </div>
                        <div className="state w-1/4 md:text-center">
                            <p className="text-center">{props.status}</p>
                        </div>
                    </Link>
                    :
                    <div className="match">
                        <div className="teams grow w-3/4">
                            <p>{props.teamA} - {props.teamB}</p>
                            <p>{props.day}.{props.month}, {props.time}</p>
                        </div>
                        {props.teamA_score || props.teamA_score === 0 ?
                            <div className="w-1/4 text-center">
                                <p>{props.teamA_score} - {props.teamB_score}</p>
                            </div>
                            :
                            <div className="state w-1/4 text-center">
                                <p>{props.status}</p>
                            </div>
                        }
                        {isAuthenticated && props.status === "pending" ?
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
                setMatches(data.data.sort((a,b) => {
                    return new Date(a.date).getTime() - new Date(b.date).getTime();
                }));
            });
    }, []);


    try {
         upcomingMatches = matches
             .filter(match => match.status === "not started")
             .map(match => (
                <Match
                    key={match._id}
                    id={match._id}
                    month={match.date.slice(6, 7)}
                    day={match.date.slice(8, 10)}
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
                month={match.date.slice(6, 7)}
                day={match.date.slice(8, 10)}
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
                month={match.date.slice(6, 7)}
                day={match.date.slice(8, 10)}
                time={match.date.slice(11, 16)}
                status={match.status}
                teamA={match.teamA}
                teamB={match.teamB}
                teamA_score={match.teamA_score}
                teamB_score={match.teamB_score}
                disabled={true}
            />
        ))
    } catch (err) {
        console.error(err)
    }

    return (
        <main className="">
            <div className="text-center">
                <p>W TEJ CZĘŚCI MECZE NIE MOGĄ SIĘ SKOŃCZYĆ REMISAMI, TOTEŻ PROSZĘ TAKOWYCH NIE OBSTAWIAĆ</p>
                <p>PRZYKŁAD: JEŚLI DOJDZIE DO KARNYCH PRZY WYNIKU 1:1, DRUŻYNA, KTÓRA WYGRA KARNE, WYGRYWA MECZ 2:1</p>
            </div>
            <div className="my-5">
                <h1 className="text-center">Upcoming matches</h1>
                {upcomingMatches}
            </div>
            <div className="my-5">
                <h1 className="text-center">Pending matches</h1>
                {pendingMatches}
            </div>
            <div className="my-5">
                <h1 className="text-center">Finished matches</h1>
                {finishedMatches}
            </div>
        </main>
    )
}
