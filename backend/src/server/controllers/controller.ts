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
  const { name, height, weight, number, health, url } = req.body;
  try {
    if (!name || !height || !weight || !number || !health || !url) {
      return res.status(400).json({ message: "Faltan datos requeridos" });
    }

    const newPokemon = await Pokemon.create({
      name,
      height,
      weight,
      number,
      health,
      url,
    });

    res.status(201).json(newPokemon);
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error al crear el Pokémon", error: error });
  }
};

export { getHeaviestPokemon, createPokemon };
