import express from "express";
const router = express.Router();
import {
  getAllMobiles,
  createMobiles

} from "../helper.js";
import {auth} from "../middleware/auth.js";
//-------------------mobiles Api's---------------------------------
//-------------------Get mobiles:localhost:4000/mobiles-----------------------
router.get("/", async function (request, response) {
  //db.movies.find({})
  const mobiles = await getAllMobiles();
  response.send(mobiles);
});

//-----------------Post(create) mobile-----------------------------
router.post("/", async function (request, response) {
  //db.mobiles.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await createMobiles(data);
  response.send(result);
});

export const mobilesRouter = router;
