const MongoClient = require('mongodb').MongoClient;

let _db; //'_' private

const mongoConnect = function(callback) {
    MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
        .then(client => {
            _db = client.db('cart-api');
            callback();
        })
        .catch(error => {
            console.log(err);
            throw new Error('DB connection failed.');
        });
}

const getDB = () => {
    if (_db) {
        return _db;
    } else {
        throw new Error('DB connect failed');
    }
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;