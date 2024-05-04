import express from "express";
import corsMiddleware from "./cors/index.js";
import cors from "cors";
import { connectDatabase } from "./connection.js";
import {userRouter} from "./routes/user.route.js"
import {teamRouter} from "./routes/team.route.js";
import {matchRouter} from "./routes/match.route.js";
const app = express();
import cookieSession from "cookie-session";
import { cookieSecret } from "./secret/creds.js"

//middleware
app.use(express.json());
app.options('*', cors());
app.use(corsMiddleware);

//allow pass data from forms
app.use(express.urlencoded({extended: "false"}));

app.use(
    cookieSession({
        name: "euro-session",
        keys: cookieSecret,
        httpOnly: true
    })
)

//routes
app.use("/api/users", userRouter);
app.use("/api/teams", teamRouter);
app.use("/api/matches", matchRouter);

app.get('/', (req, res) => {
    res.send("siema nara");
});

connectDatabase().then(() => {
    app.listen(4000, () => {
        console.log("Server started!")
    })
});