import {useEffect, useState} from "react";
import axios from "axios";

export default function Admin() {
    const [match, setMatch] = useState({
        date: '',
        teamA: '',
        teamB: '',
        status: ''
    });
    const [bets, setBets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/api/bets')
            .then(data => {
                setBets(data.data);
            });
        axios.get('http://localhost:4000/api/points')
            .then(data => {
                setBets(data.data);
            });
        }, []);

    const handleMatchFormChange = (event) => {
        const { name, value } = event.target;
        setMatch((prevState) => ({ ...prevState, [name]: value }));
    }

    const handleBetComparatorChange = (event) => {
        const { name, value } = event.target;
        setMatch((prevState) => ({ ...prevState, [name]: value }));
    }

    function addMatchSubmit(event) {
        event.preventDefault();
        try {
            axios.post('http://localhost:4000/api/matches', {
                date: match.date,
                teamA: match.teamA,
                teamB: match.teamB,
                status: "not started"
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    function comparePointsSubmit(event) {
        event.preventDefault();
        try {
            axios.put('http://localhost:4000/api/points', {
                date: match.date,
                teamA: match.teamA,
                teamB: match.teamB,
                status: "not started"
            })
        }
        catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="mt-10 flex place-content-between">
            <div>
                <form className="add-match" onSubmit={addMatchSubmit}>
                    <p>Team A:</p>
                    <input 
                        type="text"
                        id="teamA"
                        name="teamA"
                        value={match.teamA}
                        onChange={handleMatchFormChange}
                    />
                    <p>Team B:</p>
                    <input 
                        type="text"
                        id="teamB"
                        name="teamB"
                        value={match.teamB}
                        onChange={handleMatchFormChange}
                    />
                    <p>Date: (set +2 hours cause of timezone)</p>
                    <input 
                        type="datetime-local"
                        id="date"
                        name="date"
                        value={match.date}
                        onChange={handleMatchFormChange}
                    />
                    <br />
                    <button type="submit">Add match</button>
                </form>
            </div>
            <div>
                <form className="add-match" onSubmit={comparePointsSubmit}>
                    <p>Team A:</p>
                    <input
                        type="text"
                        id="teamA"
                        name="teamA"
                        value={match.teamA}
                        onChange={handleBetComparatorChange}
                    />
                    <p>Team B:</p>
                    <input
                        type="text"
                        id="teamB"
                        name="teamB"
                        value={match.teamB}
                        onChange={handleBetComparatorChange}
                    />
                    <br />
                    <button type="submit">Add match</button>
                </form>
            </div>
        </div>
    )
}