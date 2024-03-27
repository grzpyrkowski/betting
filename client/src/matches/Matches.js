import React from "react";

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
                <TeamButton value="Polska"/> - <TeamButton value="Walia"/>
            </div>
        </div>
    )
}

export default function Matches() {
    return (
        <>
            <div className="text-center my-10">
                <h1 className="text-">Let's bet!</h1>
                <h5>If currently available, below you can find some matches to bet</h5>
            </div>
            <div id="matches">
                <Match />
            </div>
        </>
    )
}