import { Response, Request } from "express";
import Pokemon from "../database/models/pokemon";

const getHeaviestPokemon = async (req: Request, res: Response) => {
  try {
    const pokemons = await Pokemon.findAll({
      order: [["weight", "DESC"]],
      limit: 25,
    });
    res.json(pokemons);
  } catch (error) {
    console.log(error);
  }
};
const createPokemon = async (req: Request, res: Response) => {
  const { name, type, height, weight, image } = req.body;
  try {
    const newPokemon = await Pokemon.create({
      name,
      type,
      height,
      weight,
      image,
    });
    res.status(201).json(newPokemon);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el Pokémon" });
  }
};

export { getHeaviestPokemon, createPokemon };
