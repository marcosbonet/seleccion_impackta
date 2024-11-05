import axios from 'axios';
import { AppDispatch } from '../store';
import { Pokemon } from '../../models/pokemon.model';
import { addNewPokemon, setPokemonList } from '../reducers/pokemonSlice';

export const fetchHeaviestPokemon = () => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.get<Pokemon[]>('http://localhost:7768/api/pokemon/heaviest');
        console.log(response.data);
        dispatch(setPokemonList(response.data));
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};

export const addPokemon = (pokemonData: Pokemon) => async (dispatch: AppDispatch) => {
    try {
        const response = await axios.post<Pokemon>(
            'http://localhost:7768/api/pokemon',
            pokemonData
        );
        dispatch(addNewPokemon(response.data));
        alert('¡Pokémon creado exitosamente!');
    } catch (error) {
        console.error('Error creating Pokémon:', error);
    }
};
