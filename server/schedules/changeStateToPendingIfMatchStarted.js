import  { schedule } from "node-cron"
import {MongoClient} from "mongodb";
import 'dotenv/config';

export function changeStateToPendingIfMatchStarted() {
    const client = new MongoClient(process.env.DATABASE_URL);

    schedule("0 * * * *", async function () {
        try {
            await client.db("euro").collection("matches")
                .updateMany({status: "not started", date: {$lt: new Date()}}, {$set: {status: "pending"}});
        } catch (err) {
            console.log(err);
        } finally {
            console.log("update done")
        }
    });
}
