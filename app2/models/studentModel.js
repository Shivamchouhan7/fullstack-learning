const { MongoClient } = require("mongodb");

const mongoUrl = "mongodb://127.0.0.1:27017";
const databaseName = "acro";
const collectionName = "student";

async function withStudentCollection(operation) {
    const client = new MongoClient(mongoUrl);

    try {
        await client.connect();
        const collection = client.db(databaseName).collection(collectionName);
        return await operation(collection);
    } finally {
        await client.close();
    }
}

function listStudent() {
    return withStudentCollection((collection) => collection.find().toArray());
}

function search(id) {
    return withStudentCollection((collection) => collection.findOne({ _id: id }));
}

function saveData(data) {
    return withStudentCollection((collection) => collection.insertOne(data));
}

function updById(id, data) {
    return withStudentCollection((collection) =>
        collection.findOneAndUpdate(
            { _id: id },
            { $set: data },
            { returnDocument: "after" }
        )
    );
}

module.exports = {
    listStudent,
    search,
    saveData,
    updById
};
