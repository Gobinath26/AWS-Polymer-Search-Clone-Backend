import { client } from "./index.js";
import { ObjectId } from "mongodb";

export async function createMobiles(data) {
  return await client.db("b30wd").collection("mobiles").insertMany(data);
}

export async function getAllMobiles() {
  return await client.db("b30wd").collection("mobiles").find({}).toArray();
}

//these allare called db commands
