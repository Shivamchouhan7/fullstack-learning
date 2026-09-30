const { MongoClient } = require("mongodb");

const client = new MongoClient("mongodb://127.0.0.1:27017");

async function connect() {
    await client.connect();

    const db = client.db("acro");

    return {
        client,
        db
    };
}

module.exports = {
    connect
};

