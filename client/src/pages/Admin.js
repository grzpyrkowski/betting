import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import { useState } from "react";
import axios from "axios";

export default function Admin( {user} ) {
    const { } = useKindeAuth();

    const [match, setMatch] = useState({
        date: '',
        teamA: '',
        teamB: '',
        status: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setMatch((prevState) => ({ ...prevState, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();
        try {
            axios.post('http://localhost:4000/api/matches', {
                date: match.date,
                teamA: match.teamA,
                teamB: match.teamB,
                status: "not started"
            });
        } 
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div>
            <div>
                <h1>Add match</h1>
                <form onSubmit={handleSubmit}>
                    <p>Team A:</p>
                    <input 
                        type="text"
                        id="teamA"
                        name="teamA"
                        value={match.teamA}
                        onChange={handleChange}
                    />
                    <p>Team B:</p>
                    <input 
                        type="text"
                        id="teamB"
                        name="teamB"
                        value={match.teamB}
                        onChange={handleChange}
                    />
                    <p>Date:</p>
                    <input 
                        type="date"
                        id="date"
                        name="date"
                        value={match.date}
                        onChange={handleChange}
                    />
                    <button type="submit">Add match</button>
                </form>
            </div>


        </div>
    )
}