const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connecting successfully");
    app.listen(process.env.PORT || 8000), (err) => {
        if(err) console.log(err);
        console.log("running successfully at", process.env.PORT);
    }
})
.catch((error)=>{
    console.log("error", error);    
})


app.get("/", (req, res) => {
    res.send("api running dad");
})

app.listen(4000);















// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sarfaraztahirarain2006:<db_password>@cluster0.hflma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

