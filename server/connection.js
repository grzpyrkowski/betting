import {user, password} from "./secret/creds.js";
import mongoose from "mongoose";
import db from "./models/index.js";

const uri = `mongodb+srv://${user}:${password}@cluster0.ncab2js.mongodb.net/euro?retryWrites=true&w=majority&appName=Cluster0`;
const Role = db.role;

export async function connectDatabase() {

    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => {
                console.log("Connected to Database");
                initial();
            })
            .catch(err => {
                console.error(err);
            });

        function initial() {
            Role.estimatedDocumentCount((err, count) => {
                if (!err && count === 0) {
                    new Role({
                        name: "user"
                    }).save(err => {
                        if (err) console.error(err);
                    });

                    console.log("added 'user' to roles collection");


                    new Role({
                        name: "mod"
                    }).save(err => {
                        if (err) console.error(err);
                    });

                    console.log("added 'mod' to roles collection");

                    new Role({
                        name: "admin"
                    }).save(err => {
                        if (err) console.error(err);
                    });

                    console.log("added 'admin' to roles collection");
                }
            });
        }

        // await createManyDocuments(client, "teams", teamsCollection)

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

       // await createManyDocuments(client, "teams", teamsCollection)

    } catch (e) {
        console.error(e);
    } finally {
        // await client.close();
    }
}

connectDatabase().catch(console.error);
