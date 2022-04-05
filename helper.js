import { client } from "./index.js";
import { ObjectId } from "mongodb";

<<<<<<< HEAD
export async function getMovieById(id) {
  console.log(id, ObjectId(id));
  return await client
    .db("b30wd")
    .collection("movies")
    .findOne({ _id: ObjectId(id) });
}
export async function createMovies(data) {
  return await client.db("b30wd").collection("movies").insertMany(data);
}
export async function createUser(data) {
  return await client.db("b30wd").collection("users").insertOne(data);
}
export async function getUserByName(username) {
  return await client
    .db("b30wd")
    .collection("users")
    .findOne({ username: username });
}
export async function deleteMovieById(id) {
  return await client
    .db("b30wd")
    .collection("movies")
    .deleteOne({ _id: ObjectId(id) });
}
export async function getAllMovies() {
  return await client.db("b30wd").collection("movies").find({}).toArray();
}
export async function updateMovieById(id, updateData) {
  return await client
    .db("b30wd")
    .collection("movies")
    .updateOne({ _id: ObjectId(id) }, { $set: updateData });
=======
export async function createMobiles(data) {
  return await client.db("b30wd").collection("mobiles").insertMany(data);
}

export async function getAllMobiles() {
  return await client.db("b30wd").collection("mobiles").find({}).toArray();
>>>>>>> 3dfc78bdf9ba75c649fb07eb59c3fdd0a9c5d594
}

//these allare called db commands
