import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import React, {useEffect, useState} from "react";
import {baseUrl} from "../data/globalConsts";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

Chart.register(CategoryScale);

export default function Scores() {
    const {user} = useKindeAuth();
    console.log(user);
    const [labels, setLabels] = useState([]);
    const [amounts, setAmounts] = useState([]);
    const [users, setUsers] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
            {
                label: "Points: ",
                data: [],
                backgroundColor: [
                    "rgba(75,192,192,1)"
                ],
                borderColor: "black",
                borderWidth: 2
            }
        ]
    });

    useEffect(() => {
        // try {
        //     axios.get(`${baseUrl}api/points`)
        //         .then(data => {
        //             setLabels(data.data.map(label => label.user_id));
        //             setAmounts(data.data.map(label => label.amount));
        //         });
        // } catch (err) {
        //     console.log(err);
        // } finally {
        //     setChartData({
        //         labels: labels,
        //         datasets: [
        //             {
        //                 label: "Points: ",
        //                 data: amounts,
        //                 backgroundColor: [
        //                     "rgba(75,192,192,1)"
        //                 ],
        //                 borderColor: "black",
        //                 borderWidth: 2
        //             }
        //         ]
        //     });
        // }
        axios.get('https://euro2024.kinde.com/api/v1/users',
            {
                headers: {
                    'Accept':'application/json',
                    'Authorization':'Bearer {access-token}'
                }
            })
            .then(function(res) {
                return res.json();
            }).then(function(body) {
            console.log(body);
        });
    }, []);

    console.log(users)


    return (
        <div className="chart-container">
            <h2 className="text-center">Scores</h2>
            <Bar data={chartData}/>
        </div>
    );
}