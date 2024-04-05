import express from "express";
import corsMiddleware from "./cors/index.js";
import cors from "cors";
import { connectDatabase } from "./connection.js";
import {userRouter} from "./routes/user.route.js"
import {teamRouter} from "./routes/team.route.js";
import {matchRouter} from "./routes/match.route.js";
const app = express();

//middleware
app.use(express.json());
app.options('*', cors());
app.use(corsMiddleware);

//allow pass data from forms
app.use(express.urlencoded({extended: "false"}))

//routes
app.use("/api/users", userRouter);
app.use("/api/teams", teamRouter);
app.use("/api/matches", matchRouter);

app.get('/', (req, res) => {
    res.send("siema nara");
});

connectDatabase().then(() => {
    console.log("Connected to db!")
    app.listen(4000, () => {
        console.log("Server started!")
    })
});