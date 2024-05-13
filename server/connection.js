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


        // await createManyDocuments(client, "teams", teamsCollection)

        // await createUser(client,
        //     {
        //         name: "Madzia",
        //         password: "Yuki1",
        //         role: "admin",
        //         points: 50
        //     })

        // await createMatches(client, [
        //     {
        //         date: "2024-03-26",
        //         teamA: "x",
        //         teamB: "y"
        //     },
        //     {
        //         date: "2024-03-26",
        //         teamA: "z",
        //         teamB: "v"
        //     }
        // ])

        // await listDatabases(client);

        // await findTeam(client, "Poland");

        // await displayCollection(client, "users");

        // await updateUser(client, "Marzia", {password: "Yuki3"});

        // await updateAllUsersMatchingSpecifiedName(client, "Madzia", {points: 120});

        // await deleteUserByName(client, "Marzia");

        // await deleteAllMatchesWithSpecifiedDate(client, "2024-03-26");

       // await createManyDocuments(client, "teams", teamsCollection)

    } catch (e) {
        console.error(e);
    } finally {
        // await client.close();
    }
}

connectDatabase().catch(console.error);
