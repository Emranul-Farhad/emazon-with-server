const express = require('express')
const app = express()
const port = process.env.PORT || 8000
var cors = require('cors')
require('dotenv').config();

app.use(cors())
app.use(express.json())

// 



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r7oz2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


 async function run(){

    try{
        await client.connect()
        const collection = client.db("emazon").collection("products");

        app.get('/products' , async(req,res) => {
            const query = {}
            const products = collection.find(query)
            const result = await products.toArray()
            res.send(result)
        } )

    }

    finally{

    }
 }

run().catch(console.dir);






// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   console.log('c');
//   client.close();
// });






// 

app.get('/', (req, res) => {
  res.send('Hello World! connect')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})