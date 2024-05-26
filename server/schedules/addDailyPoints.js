import  { schedule } from "node-cron"
import {MongoClient} from "mongodb";

export function addDailyPoints() {

    const client = new MongoClient(process.env.DATABASE_URL);

    schedule("0 3 * * *", async function () {
        try {
            let points = await client.db("euro").collection("points").find({}).toArray();
            points.forEach(point => {
                client.db("euro").collection("points")
                    .updateOne({_id: point._id}, {$set: {amount: point.amount + 3}});
            })
        } catch (err) {
            console.log(err);
        } finally {
            console.log("daily points added");
        }
    });
}
