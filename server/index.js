import express, { json } from "express";
import { connectDatabase } from "./connection.js";
import { User } from "./models/user.model.js"
import {userRouter} from "./routes/user.route.js"
const app = express();

//middleware
app.use(express.json());
//allow pass data from forms
app.use(express.urlencoded({extended: "false"}))

//routes
app.use("/api/users", userRouter);

app.get('/', (req, res) => {
    res.send("siema nara");
});

connectDatabase().then(() => {
    console.log("Connected to db!")
    app.listen(4000, () => {
        console.log("Server started!")
    })
});