import {useState} from "react";
import axios from "axios";
import {baseUrl} from "../globalConsts";

export default function Admin() {
    const [match, setMatch] = useState({
        date: '',
        teamA: '',
        teamB: '',
        status: ''
    });

    const handleMatchFormChange = (event) => {
        const { name, value } = event.target;
        setMatch((prevState) => ({ ...prevState, [name]: value }));
    }

    function addMatchSubmit(event) {
        event.preventDefault();
        try {
            axios.post(`${baseUrl}api/matches`, {
                date: match.date,
                teamA: match.teamA,
                teamB: match.teamB,
                status: "not started"
            });
        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <main>
                <form className="add-match" onSubmit={addMatchSubmit}>
                    <section className="flex">
                        <label>
                            <p>Team A:</p>
                            <input
                                type="text"
                                id="teamA"
                                name="teamA"
                                value={match.teamA}
                                onChange={handleMatchFormChange}
                            />
                        </label>
                        <label className="ml-5">
                            <p>Team B:</p>
                            <input
                                type="text"
                                id="teamB"
                                name="teamB"
                                value={match.teamB}
                                onChange={handleMatchFormChange}
                            />
                        </label>
                    </section>
                    <p>Date:</p>
                    <input 
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={match.date}
                        onChange={handleMatchFormChange}
                    />
                    <br />
                    <button className="mt-3" type="submit">Add match</button>
                </form>
        </main>
    );
}