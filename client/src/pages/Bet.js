import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

export default function Bet() {
    const navigate = useNavigate();
    let { id } = useParams();
    const { user } = useKindeAuth();
    const [match, setMatch] = useState('');
    const [bet, setBet] = useState({
        scoreA: '',
        scoreB: '',
        points_value: '',
        match_id: '',
        user_id: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:4000/api/matches/${id}`)
            .then((data) => {
                setMatch(data.data);
            })
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBet((prevState) => ({ ...prevState, [name]: value }));
    };

    function handleSubmit(event) {
        event.preventDefault();
        try {
            axios.post('http://localhost:4000/api/bets', {
                scoreA: bet.scoreA,
                scoreB: bet.scoreB,
                points_value: bet.points_value,
                match_id: id,
                user_id: user.id,
            })
        }
        catch (err) {
            console.error(err)
        }
        navigate('/matches');
    }
    console.log(user.id)

    return (
        <div>
            <form className="add-match" onSubmit={handleSubmit}>
                <p>{match.teamA}</p>
                <input
                    type="number"
                    id="scoreA"
                    name="scoreA"
                    value={bet.scoreA}
                    onChange={handleChange}
                />
                <p>{match.teamB}</p>
                <input
                    type="number"
                    id="scoreB"
                    name="scoreB"
                    value={bet.scoreB}
                    onChange={handleChange}
                />
                <p>How much points with you wanna bet? (max. 10)</p>
                <input
                    type="number"
                    id="points_value"
                    name="points_value"
                    value={bet.points_value}
                    onChange={handleChange}
                />
                <br/>
                <button type="submit">Add bet</button>
            </form>
        </div>
    )
}