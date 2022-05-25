const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const bodyParser = require('body-parser')


// pass: doctor1001
// user: doctoradmin

// middleware
app.use(cors())
app.use(bodyParser.json())


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://doctoradmin:doctor1001@cluster0.uppua.mongodb.net/doctorstorge?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("doctorstorge").collection("doctorcollection");
  
  // post data to servar
  
  app.post('/sendData', (req,res) => {
    const data = req.body.allData
    collection.insertOne(data)
    .then(result => {
      console.log('data added sucessfylly')
    })
  })
 
  
   // read data from servar
  //================================
   app.get('/getdata', (req,res) =>{
     collection.find({})
     .toArray((error, document) =>{
       res.send(document)
     })
   })
 
});





app.get('/', (req, res) => {
    res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


