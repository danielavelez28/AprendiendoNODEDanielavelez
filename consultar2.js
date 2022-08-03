const MongoCli  = require('mongodb').MongoClient;

const uri = "mongodb+srv://Usuario1:18UWPP7uT6CbOcpY@clusteradsi364481.gptnoxv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoCli(uri);
async function run() {
  try {
    const database = client.db("POSDanielaVelez");
    const nombre = database.collection("Vendedores");

    const query = {"cedula":123456790};
    const vendedor = await nombre.findOne(query);

    console.log(vendedor);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);       