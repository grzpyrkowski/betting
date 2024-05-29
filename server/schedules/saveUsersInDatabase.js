import  { schedule } from "node-cron"
import {MongoClient} from "mongodb";
import 'dotenv/config';
import {getUsers} from "../kinde/fetchUsers.js";

export function saveUsersInDatabase() {
    const client = new MongoClient(process.env.DATABASE_URL);

    schedule("0 * * * *", async function () {
        try {
            getUsers().then(res => res.users.forEach((user) => {
                client.db("euro").collection("users")
                    .updateOne({kinde_user_id: user.id}, {$set: {username: user.username, kinde_user_id: user.id}}, {upsert: true});
            }));
        } catch (err) {
            console.log(err);
        } finally {
            console.log("update done")
        }
    });
}