import express from "express";
const router = express.Router();
import {
  getAllMovies,
  createMovies,
  deleteMovieById,
  getMovieById,
  updateMovieById,
} from "../helper.js";
import {auth} from "../middleware/auth.js";
//-------------------Movies Api's---------------------------------
//-------------------Get movies:localhost:4000/movies-----------------------
router.get("/", async function (request, response) {
  //db.movies.find({})
  const movies = await getAllMovies();
  response.send(movies);
});
//-------------------Get movie by id:localhost:4000/movies/id-----------------------
router.get("/:id", async function (request, response) {
  console.log(request.params);
  //filter/find
  //db.movies.findOne({id:"102"})
  const { id } = request.params;
  //const movie = movies.find((mv) => mv.id === id);
  const movie = await getMovieById(id);
  console.log(movie);
  movie
    ? response.send(movie)
    : response.status(404).send({ message: "No such movie found" });
});
//-------------------Delete movie by id:localhost:4000/movies/id-----------------------
router.delete("/:id", async function (request, response) {
  console.log(request.params);
  //filter/find
  //db.movies.deleteOne({id:"102"})
  const { id } = request.params;
  //const movie = movies.find((mv) => mv.id === id);
  const result = await deleteMovieById(id);
  response.send(result);
});
//-------------------Update(Edit)(put) movie by id:localhost:4000/movies/id-----------------------
router.put("/:id", async function (request, response) {
  console.log(request.params);
  //db.movies.updateOne({id:"102"},{$set:updateData})
  const { id } = request.params;
  const updateData = request.body;
  const result = await updateMovieById(id, updateData);
  response.send(result);
});
//-----------------Post(create) movies-----------------------------
router.post("/", async function (request, response) {
  //db.movies.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await createMovies(data);
  response.send(result);
});

export const moviesRouter = router;
