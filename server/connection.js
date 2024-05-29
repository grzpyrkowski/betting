import mongoose from "mongoose";
import 'dotenv/config';

const url = process.env.DATABASE_URL;

export async function connectDatabase() {

    try {
        await mongoose.connect(url, {
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
    }
}

connectDatabase().catch(console.error);
