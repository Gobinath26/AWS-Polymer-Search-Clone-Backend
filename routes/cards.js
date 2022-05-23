import express from "express";
const router = express.Router();
import { getAllCards, createCards } from "../helper.js";
//-------------------Cards Api's---------------------------------
//-------------------Get cards:localhost:4000/cards-----------------------
router.get("/", async function (request, response) {
  //db.cards.find({})
  const cards = await getAllCards();
  response.send(cards);
});
//-----------------Post(create) cards-----------------------------
router.post("/", async function (request, response) {
  //db.cards.insertMany(data)
  const data = request.body;
  console.log(data);
  const result = await createCards(data);
  response.send(result);
});

export const cardsRouter = router;
