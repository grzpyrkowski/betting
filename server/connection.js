import {MongoClient} from "mongodb";
import {user, password} from "./secret/creds.js";
const uri = `mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
import {displayCollection, createManyDocuments} from "./crud.js";
import {teamsCollection} from "./data/teamsCollection.js";

async function main() {

    const client = new MongoClient(uri);

    await client.connect();

    try {
        await client.connect();

        await createManyDocuments(client, "teams", teamsCollection)

        // await createUser(client,
        //     {
        //         name: "Madzia",
        //         creds.js: "Yuki1",
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

        // await updateUser(client, "Marzia", {creds.js: "Yuki3"});

        // await updateAllUsersMatchingSpecifiedName(client, "Madzia", {points: 120});

        // await deleteUserByName(client, "Marzia");

        // await deleteAllMatchesWithSpecifiedDate(client, "2024-03-26");

       await createManyDocuments(client, "teams", teamsCollection)

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
