const MongoCli  = require('mongodb').MongoClient;

const uri = "mongodb+srv://Usuario1:18UWPP7uT6CbOcpY@clusteradsi364481.gptnoxv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("POSDanielaVelez");
    const cedula = database.collection("Vendedores");

    const options = {
        sort: { "cedula": -1 },
        projection: { _id: ""},
      };

    console.log(cedula);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);    