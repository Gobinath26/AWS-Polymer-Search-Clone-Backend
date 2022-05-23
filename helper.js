import { client } from "./index.js";

// Create Cards
export async function createCards(data) {
  return await client.db("b30wd").collection("cards").insertMany(data);
}

// Get All Cards
export async function getAllCards() {
  return await client.db("b30wd").collection("cards").find({}).toArray();
}


//these allare called db commands
