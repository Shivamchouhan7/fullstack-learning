const { MongoClient } = require("mongodb");
const client = new MongoClient("mongodb://127.0.0.1:27017");

function fetch() {
    client.connect().then(() => {
        const db = client.db("acro");
        db.collection('student').find().toArray().then((rec) => {
            console.log(rec);
            client.close();
        });
    }).catch((err) => console.log(err));
}

fetch();