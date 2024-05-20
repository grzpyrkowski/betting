import {user, password} from "./secret/creds.js";
import mongoose from "mongoose";

const uri = `mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/euro?retryWrites=true&w=majority&appName=Cluster0`;

export async function connectDatabase() {

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log("Connected to Database");
            })
            .catch(err => {
                console.error(err);
            });
    } catch (e) {
        console.error(e);
    } finally {
        // await client.close();
    }
}

connectDatabase().catch(console.error);
