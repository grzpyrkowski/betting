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
                    <section className="flex place-content-between">
                        <div>
                            <p>Team A:</p>
                            <input
                                className="w-24"
                                type="text"
                                id="teamA"
                                name="teamA"
                                value={match.teamA}
                                onChange={handleMatchFormChange}
                            />
                        </div>
                        <div className="text-right">
                            <p>Team B:</p>
                            <input
                                className="w-24"
                                type="text"
                                id="teamB"
                                name="teamB"
                                value={match.teamB}
                                onChange={handleMatchFormChange}
                            />
                        </div>
                    </section>
                    <p>Date:</p>
                    <input
                        className="w-24"
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={match.date}
                        onChange={handleMatchFormChange}
                    />
                    <br />
                    <button className="btn mt-3 float-right" type="submit">Add match</button>
                </form>
        </main>
    );
}