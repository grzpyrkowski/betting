// import  { schedule } from "node-cron"
// import {MongoClient} from "mongodb";
// import {password, user} from "../secret/creds.js";
//
// export function changeStateToPendingIfMatchStarted() {
//
//     const client = new MongoClient(`mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/euro?retryWrites=true&w=majority&appName=Cluster0`);
//
//     schedule("0 * * * *", async function () {
//         try {
//             await client.db("euro").collection("matches")
//                 .updateMany({status: "not started", date: {$lt: new Date()}}, {$set: {status: "pending"}});
//         } catch (err) {
//             console.log(err);
//         } finally {
//             console.log("update done")
//         }
//     });
// }
