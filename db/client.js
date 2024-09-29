const { MongoClient, ServerApiVersion } = require("mongodb");

const uri =
  "mongodb+srv://mobile_reseller:BetrbIYaaU3ivCXr@cluster0.viq6r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


module.exports = client;
