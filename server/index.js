import express from "express";
import {matchRouter} from "./routes/match.route.js";
import {betRouter} from "./routes/bet.route.js";
import {pointsRouter} from "./routes/points.route.js";
import {usersRouter} from "./routes/users.route.js";
import * as path from "node:path";
import { fileURLToPath } from 'url';
import {connectDatabase} from "./connection.js";
import {changeStateToPendingIfMatchStarted} from "./schedules/changeStateToPendingIfMatchStarted.js";
import {addDailyPoints} from "./schedules/addDailyPoints.js";
import 'dotenv/config';
import {saveUsersInDatabase} from "./schedules/saveUsersInDatabase.js";
const app = express();
const port = process.env.PORT || 8080;

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
app.use("/api/users", usersRouter);

app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: buildPath});
})

connectDatabase().then(() => {
    app.listen(port, () => {
        console.log("Server started!");
        changeStateToPendingIfMatchStarted();
        addDailyPoints();
        saveUsersInDatabase();
    });
});