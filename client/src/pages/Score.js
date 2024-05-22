import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Score() {
    const navigate = useNavigate();
    let { id } = useParams();
    const [bets, setBets] = useState([]);
    const [points, setPoints] = useState([]);
    const [score, setScore] = useState({
        correct_scoreA: '',
        correct_scoreB: ''
    });

    useEffect(() => {
        axios.get('http://localhost:4000/api/bets')
            .then((data) => {
                setBets(data.data);
            });
        axios.get('http://localhost:4000/api/points')
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
                                axios.put(`http://localhost:4000/api/points/${point._id}`, {
                                    amount: point.amount + Math.round(bet.points_value * 2.5)
                                })
                            } catch (err) {
                                console.error(err)
                            }
                        } else if ((bet.scoreA > bet.scoreB && score.correct_scoreA > score.correct_scoreB) ||
                            (bet.scoreA === bet.scoreB && score.correct_scoreA === score.correct_scoreB) ||
                            (bet.scoreA < bet.scoreB && score.correct_scoreA < score.correct_scoreB)) {
                            try {
                                axios.put(`http://localhost:4000/api/points/${point._id}`, {
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
            axios.put(`http://localhost:4000/api/matches/${id}`, {
                status: "finished"
            })
        } catch (err) {
            console.error(err)
        }
        navigate('/matches');
    }

    return (
        <div>
            <form className="add-match" onSubmit={addScoreSubmit}>
                <p>Team A:</p>
                <input
                    type="number"
                    id="correct_scoreA"
                    name="correct_scoreA"
                    value={score.correct_scoreA}
                    onChange={handleScoreFormChange}
                />
                <p>Team B:</p>
                <input
                    type="number"
                    id="correct_scoreB"
                    name="correct_scoreB"
                    value={score.correct_scoreB}
                    onChange={handleScoreFormChange}
                />
                <br/>
                <button type="submit">Add score</button>
            </form>
        </div>
    )
}