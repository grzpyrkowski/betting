// import  { schedule } from "node-cron"
// import {MongoClient} from "mongodb";
// import {password, user} from "../secret/creds.js";
//
// export function addDailyPoints() {
//
//     const client = new MongoClient(`mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/euro?retryWrites=true&w=majority&appName=Cluster0`);
//
//     schedule("0 3 * * *", async function () {
//         try {
//             let points = await client.db("euro").collection("points").find({}).toArray();
//             points.forEach(point => {
//                 client.db("euro").collection("points")
//                     .updateOne({_id: point._id}, {$set: {amount: point.amount + 3}});
//             })
//         } catch (err) {
//             console.log(err);
//         } finally {
//             console.log("daily points added");
//         }
//     });
// }
