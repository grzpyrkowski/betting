import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import {baseUrl} from "../globalConsts";

export default function Bet() {
    const [match, setMatch] = useState('');
    const [bets, setBets] = useState([]);
    const [points, setPoints] = useState([]);
    const [bet, setBet] = useState({
        scoreA: '',
        scoreB: '',
        points_value: '',
        match_id: '',
        user_id: ''
    });
    const navigate = useNavigate();
    const { user } = useKindeAuth();
    let { id } = useParams();

    let isAlreadyBet = false;

    useEffect(() => {
        axios.get(`${baseUrl}api/matches/${id}`)
            .then((data) => {
                setMatch(data.data);
            });
        axios.get(`${baseUrl}api/bets`)
            .then((data) => {
                setBets(data.data);
            });
        axios.get(`${baseUrl}api/points`)
            .then((data) => {
                setPoints(data.data);
            });
    }, [id, user.id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBet((prevState) => ({ ...prevState, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        checkIfFirstBet();
        points.forEach(point => {
            if (point.user_id === user.id) {
                if (bet.points_value <= point.amount) {
                    try {
                        axios.post(`${baseUrl}api/bets`, {
                            scoreA: bet.scoreA,
                            scoreB: bet.scoreB,
                            points_value: bet.points_value,
                            match_id: id,
                            user_id: user.id,
                        });
                    } catch (err) {
                        console.error(err);
                    }
                    try {
                        axios.put(`${baseUrl}api/points/${point._id}`, {
                            amount: point.amount - bet.points_value
                        });
                    } catch (err) {
                        console.error(err);
                    }
                    alert("Bet added successfully!");
                    navigate('/matches');
                } else {
                    alert("You don't have that much points to place that bet!");
                }}
        });
    }

    function checkIfFirstBet () {
        if (points.filter((point) => point.user_id === user.id).length === 0) {
            try {
                axios.post(`${baseUrl}api/points`, {
                    amount: 50,
                    user_id: user.id,
                });
            } catch (err) {
                console.error(err);
            }
        }
    }

    function checkIfAlreadyBet() {
        for (let i = 0; i < bets.length; i++) {
            if (bets[i].match_id === id && bets[i].user_id === user.id) {
                isAlreadyBet = true;
            }
        }
    }

    checkIfAlreadyBet();

    return (
        <div>
            { isAlreadyBet ?
                <div>You already bet this one!</div>
                :
                <form className="add-match" onSubmit={handleSubmit}>
                    <p>{match.teamA}</p>
                    <input
                        type="number"
                        id="scoreA"
                        name="scoreA"
                        min="0"
                        value={bet.scoreA}
                        onChange={handleChange}
                    />
                    <p>{match.teamB}</p>
                    <input
                        type="number"
                        id="scoreB"
                        name="scoreB"
                        min="0"
                        value={bet.scoreB}
                        onChange={handleChange}
                    />
                    <p>How much points with you wanna bet? (max. 10)</p>
                    <input
                        type="number"
                        id="points_value"
                        name="points_value"
                        min="0"
                        max="10"
                        value={bet.points_value}
                        onChange={handleChange}
                    />
                    <br/>
                    <button type="submit">Add bet</button>
                </form>
            }
        </div>
    );
}