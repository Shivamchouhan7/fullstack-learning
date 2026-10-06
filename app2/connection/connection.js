const { MongoClient } = require("mongodb");

const mycon = async () => {
    const client = new MongoClient("mongodb://127.0.0.1:27017");
    await client.connect();
    await client.close();
    console.log("Database connected successfully.");
};

module.exports = mycon;
