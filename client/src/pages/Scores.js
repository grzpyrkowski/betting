import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React, {useEffect, useState} from "react";
import {baseUrl} from "../globalConsts";
import axios from "axios";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);
Chart.defaults.font.size = 20;

export default function Scores() {
    const [users, setUsers] = useState([]);
    const [points, setPoints] = useState([]);
    const sortedPoints = points;
    const sortedUsers = [];

    useEffect(() => {
        try {
            axios.get(`${baseUrl}api/users`)
                .then(data => {
                    setUsers(data.data);
                });
            axios.get(`${baseUrl}api/points`)
                .then(data => {
                    setPoints(data.data);
                });
        } catch (err) {
            console.log(err);
        }
    }, []);

    function sortPoints() {
        for (let i = 0; i < sortedPoints.length; i++) {
            for (let j = 0; j < (sortedPoints.length - i - 1); j++) {
                if (sortedPoints[j].amount > sortedPoints[j + 1].amount) {
                    let temp = sortedPoints[j];
                    sortedPoints[j] = sortedPoints[j + 1];
                    sortedPoints[j + 1] = temp;
                }
            }
        }
    }

    function sortUsers() {
        for (let i = 0; i < sortedPoints.length; i++) {
            users.forEach(user => {
                if (user.kinde_user_id === sortedPoints[i].user_id) {
                    sortedUsers[i] = user;
                }
            });
        }
    }

    sortPoints();
    sortUsers();

    return (
        <div className="chart-container">
            <h2 className="text-center">Scores</h2>
            <Bar data={{
                labels: sortedUsers.map(user => user.username),
                datasets: [
                    {
                        label: "Points",
                        data: sortedPoints.map(point => point.amount),
                        backgroundColor: "rgb(75,192,108)",
                        borderColor: "black",
                        borderWidth: 1
                    }
                ],
            }}
            />
        </div>
    );
}