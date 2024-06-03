import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {baseUrl} from "../globalConsts";

export default function AdminScore() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [bets, setBets] = useState([]);
    const [points, setPoints] = useState([]);
    const [score, setScore] = useState({
        correct_scoreA: '',
        correct_scoreB: ''
    });

    useEffect(() => {
        axios.get(`${baseUrl}api/bets`)
            .then((data) => {
                setBets(data.data);
            });
        axios.get(`${baseUrl}api/points`)
            .then((data) => {
                setPoints(data.data);
            });
    }, []);

    const handleScoreFormChange = (event) => {
        const { name, value } = event.target;
        setScore((prevState) => ({ ...prevState, [name]: value }));
    }

    function addScoreSubmit(event) {
        event.preventDefault();
        bets.forEach(bet => {
            if (bet.match_id === id) {
                points.forEach(point => {
                    if (point.user_id === bet.user_id) {
                        if (bet.scoreA == score.correct_scoreA && bet.scoreB == score.correct_scoreB) {
                            try {
                                axios.put(`${baseUrl}api/points/${point._id}`, {
                                    amount: point.amount + Math.round(bet.points_value * 2.5)
                                })
                            } catch (err) {
                                console.error(err)
                            }
                        } else if ((bet.scoreA > bet.scoreB && score.correct_scoreA > score.correct_scoreB) ||
                            (bet.scoreA === bet.scoreB && score.correct_scoreA === score.correct_scoreB) ||
                            (bet.scoreA < bet.scoreB && score.correct_scoreA < score.correct_scoreB)) {
                            try {
                                axios.put(`${baseUrl}api/points/${point._id}`, {
                                    amount: point.amount + Math.round(bet.points_value * 1.5)
                                })
                            } catch (err) {
                                console.error(err)
                            }
                        }
                    }
                });
            }
        });
        try {
            axios.put(`${baseUrl}api/matches/${id}`, {
                status: "finished"
            });
        } catch (err) {
            console.error(err)
        }
        navigate('/matches');
    }

    return (
        <main>
            <form className="add-match" onSubmit={addScoreSubmit}>
                <section className="flex place-content-between">
                    <div>
                        <p>Team A:</p>
                        <input
                            className="w-24"
                            type="number"
                            id="correct_scoreA"
                            name="correct_scoreA"
                            value={score.correct_scoreA}
                            onChange={handleScoreFormChange}
                        />
                    </div>
                    <div className="text-right">
                        <p>Team B:</p>
                        <input
                            className="w-24"
                            type="number"
                            id="correct_scoreB"
                            name="correct_scoreB"
                            value={score.correct_scoreB}
                            onChange={handleScoreFormChange}
                        />
                    </div>
                </section>
                <button className="btn mt-2 float-right" type="submit">Add score</button>
            </form>
        </main>
    );
}