import React, {useEffect, useState} from "react";
import axios from "axios";

const TeamButton = (props) => {
    return (
        <div className="p-2">
            <button>{props.value}</button>
        </div>
    )
}

const Match = (props) => {
    return (
        <div key={props.key} className="bg-slate-400 p-10 rounded-xl flex">
            <div className="w-3/4 flex">
                {props.teams?.map(team => (
                    <TeamButton value={team.team_id}/>
                ))}
            </div>
            <div className="mr-10">
                <p>{props.date}, {props.time}</p>
                <p>{props.status}</p>
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
                setMatches(data.data);
            })
    }, []);

    let renderedMatches = null;

    try {
         renderedMatches = matches.map(match => (
            <Match
                key={match.id}
                date={match.date.slice(0, 10)}
                time={match.date.slice(11, 16)}
                status={match.status}
                teams={match.teams}
            />
        ))
    } catch (error) {}

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