import  { schedule } from "node-cron"
import {MongoClient} from "mongodb";
import 'dotenv/config';

export async function addDailyPoints() {
    const client = new MongoClient(process.env.DATABASE_URL);
    let date = new Date();
    let date2 = new Date();
    date2.setDate((date2.getDate() - 1));
    let matches = await client.db("euro").collection("matches").find({date: {$gt: date2, $lt: date}}).toArray();
    let users = [];
    let ungroupedUsers = [];

    schedule("0 3 * * *", async function () {
        try {
            for (const match of matches) {
                let bets = await client.db("euro").collection("bets").find({match_id: match._id}).toArray();
                bets.forEach(bet => {
                    if (!users.includes(bet.user_id)) {
                        users[users.length] = bet.user_id;
                    }
                    ungroupedUsers[ungroupedUsers.length] = bet.user_id;
                })
            }
            for (const user of users) {
                if (ungroupedUsers.filter(ungroupedUser => (ungroupedUser === user)).length === matches.length) {
                    let points = await client.db("euro").collection("points").find({user_id: user}).toArray();
                    await client.db("euro").collection("points").updateOne({_id: points[0]._id}, {$set: {amount: points[0].amount + 3}});
                }
            }
        } catch (err) {
            console.log(err);
        } finally {
            console.log("daily points added");
        }
    });
}