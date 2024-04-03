import express, { json } from "express";
import { connectDatabase } from "./connection.js";
import { User } from "./models/user.model.js"
const app = express();

//middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("siema nara");
});

app.post('/api/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: error.message});
    } finally {
        res.send("User added");
    }
});

connectDatabase().then(() => {
    console.log("Connected to db!")
    app.listen(4000, () => {
        console.log("Server started!")
    })
});


