import  { schedule } from "node-cron"
import {MongoClient} from "mongodb";
import 'dotenv/config';

export function changeStateToPendingIfMatchStarted() {
    const client = new MongoClient(process.env.DATABASE_URL);

    schedule("*/5 * * * *", async function () {
        let date = new Date();
        date.setHours(date.getHours() + 2);
        try {
            await client.db("euro").collection("matches")
                .updateMany({status: "not started", date: {$lt: date}}, {$set: {status: "pending"}});
        } catch (err) {
            console.log(err);
        } finally {
            console.log("changed state of matches");
        }
    });
}