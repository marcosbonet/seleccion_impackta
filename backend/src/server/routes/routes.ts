import express from "express";

import { getHeaviestPokemon, createPokemon } from "../controllers/controller";

const router = express.Router();

router.get("/api/pokemon/heaviest", getHeaviestPokemon);

router.post("/api/pokemon", createPokemon);

export default router;
