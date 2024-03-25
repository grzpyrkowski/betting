import {MongoClient} from "mongodb";
import {user, password} from "./secret/password.js";
const uri = `mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
import {displayCollection} from "./crud.js";

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

export async function main() {

    const client = new MongoClient(uri);

    await client.connect();

    try {
        await client.connect();

        // await createUser(client,
        //     {
        //         name: "Madzia",
        //         password.js: "Yuki1",
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

        await displayCollection(client, "users");

        // await updateUser(client, "Marzia", {password.js: "Yuki3"});

        // await updateAllUsersMatchingSpecifiedName(client, "Madzia", {points: 120});

        // await deleteUserByName(client, "Marzia");

        // await deleteAllMatchesWithSpecifiedDate(client, "2024-03-26");

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);
