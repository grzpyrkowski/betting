import React, {useEffect, useState} from "react";
import axios from "axios";

const TeamButton = (props) => {
    return (
        <button>{props.value}</button>
    )
}

const Match = () => {
    return (
        <div className="bg-slate-400 p-10 rounded-xl flex">
            <div className="mr-10">
                <span>date</span>
            </div>
            <div>
                {/*<TeamButton value="Polska"/> - <TeamButton value="Walia"/>*/}
            </div>
        </div>
    )
}

export default function Matches() {
    const [matches, setMatches] = useState([""])

    const baseURL = "http://localhost:4000/api";

    useEffect(() => {
        axios.get(`${baseURL}/matches`)
            .then((data) => {
                setMatches(data.data)
            })
    }, []);

    const renderedMatches = matches.map(match  => (
        <div key={match.id}>
            <p>{match.date}</p>
            <p>{match.status}</p>
            {match.teams.map(team => (
                <div>{team.teamA_id}</div>
            ))}
        </div>
    ))



    return (
        <>
            <div className="text-center my-10">
                <h1 className="text-">Let's bet!</h1>
                <h5>If currently available, below you can find some matches to bet</h5>
            </div>
            <div id="matches">
                {renderedMatches}
            </div>
        </>
    )
}