import express from "express";
import {matchRouter} from "./routes/match.route.js";
import {betRouter} from "./routes/bet.route.js";
import {pointsRouter} from "./routes/points.route.js";
const app = express();
import * as path from "node:path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const buildPath = path.join(__dirname, '../client/build');

//middleware
app.use(express.json());
app.use(express.static(buildPath));

//allow pass data from forms
app.use(express.urlencoded({extended: "false"}));

//routes
app.use("/api/matches", matchRouter);
app.use("/api/bets", betRouter);
app.use("/api/points", pointsRouter);

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: buildPath});
})

// connectDatabase().then(() => {
//     app.listen(8080, () => {
//         console.log("Server started!");
//         changeStateToPendingIfMatchStarted();
//         addDailyPoints();
//     })
// });