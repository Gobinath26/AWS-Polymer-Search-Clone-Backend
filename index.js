//const express = require("express"); //"type":"commonjs"
import express from "express"; //"type":"moule"
import { MongoClient } from "mongodb";
import cors from "cors";
import dotenv from "dotenv";
import { cardsRouter } from "./routes/cards.js";

dotenv.config();
console.log(process.env.MONGO_URL);
const app = express(); //Inbuilt middleware
const PORT = process.env.PORT;

app.use(cors()); // cors - 3rd party middleware
//middle ware -> Intercept the all request and converting the body into json
app.use(express.json());

//const MONGO_URL = "mongodb://localhost";
const MONGO_URL = process.env.MONGO_URL;
async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;
}
export const client = await createConnection();
//-------------Localhost home page msg(/)---------------
app.get("/", function (request, response) {
  response.send("Welcome to AWS Polymer Search✨😍👌");
});

//express concept to connect two files in node
app.use("/cards", cardsRouter);


//-------------------Cards Api's---------------------------------
//-------------------Get all cards:localhost:4000/cards------------
// app.get("/cards", async function (request, response) {
//   //db.cards.find({})
//   const cards = await client
//     .db("b30wd")
//     .collection("cards")
//     .find({})
//     .toArray();
//   response.send(cards);
// });
// //--------------Post(create) cards:localhost:4000/cards---------------
// app.post("/cards", async function (request, response) {
//   //db.cards.insertMany(data)
//   const data = request.body;
//   console.log(data);
//   const result = await client
//     .db("b30wd")
//     .collection("cards")
//     .insertMany(data);
//   response.send(result);
// });

app.listen(PORT, () => console.log(`Server started  in ${PORT}`));
