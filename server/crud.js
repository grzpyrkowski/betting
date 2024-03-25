export async function findDocument(client, collection, nameOfTeam) {
    const result = await client.db("euro").collection(collection).findOne({name: nameOfTeam});

    if (result) {
        console.log(`Found something about ${nameOfTeam}!`)
        console.log(result)
    } else {
        console.log(`Couldn't find any info about ${nameOfTeam}`)
    }
}

export async function displayCollection(client, collection) {
    const result = await client.db("euro").collection(collection)
        .find({})
        // .sort()
        // .limit()
        .toArray();
    if (result) {
        console.log("Found some matches:")
        console.log(result);
    } else {
        console.log("Nothing found :(")
    }
}

export async function createSingleDocument(client, collection, newUser) {
    const result = await client.db("euro").collection(collection).insertOne(newUser);
    console.log(`User ${result.insertedId} added!`)
}

export async function createManyDocuments(client, collection, newMatches) {
    const result = await client.db("euro").collection(collection).insertMany(newMatches);
    console.log(`${result.insertedCount} new matches added`)
    console.log(result.insertedIds);
}

//atm single-use only
async function createOrUpdateDocumentByName(client, collection, nameOfUser, updateDetails) {
    const result = await client.db("euro").collection(collection).updateOne({name: nameOfUser}, {$set: updateDetails}, {upsert: true});
    console.log(`${result.matchedCount} document(s) found with name ${nameOfUser}`);

    if (result.upsertedCount > 0) {
        console.log(`${result.upsertedCount} document(s) was/were created`)
    } else {
        console.log(`${result.modifiedCount} document(s) was/were updated`)
    }
}

async function updateAllUsersMatchingSpecifiedName(client, collection, nameOfUser, updateDetails) {
    const result = await client.db("euro").collection(collection).updateMany({name: nameOfUser}, {$set: updateDetails});

    if (result.matchedCount > 0) {
        console.log(`${result.matchedCount} document(s) found with name ${nameOfUser}`);
        if (result.modifiedCount > 0) {
            console.log(`${result.modifiedCount} document(s) was/were updated`)
        } else {
            console.log(`But something gone wrong in updating!`)
        }
    } else {
        console.log(`0 documents found with name ${nameOfUser}`)
    }
}

async function deleteUserByName(client, nameOfUser) {
    const result = await client.db("euro").collection("users").deleteOne({name: nameOfUser});

    if (result.deletedCount > 0) {
        console.log(`User ${nameOfUser} was deleted`)
    } else {
        console.log(`User ${nameOfUser} couldn't be deleted`)
    }
}

async function deleteAllMatchesWithSpecifiedDate(client, date){
    const result = await client.db("euro").collection("matches").deleteMany({date: date});

    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}