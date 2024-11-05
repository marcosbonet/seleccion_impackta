import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../../models/pokemon.model';

interface PokemonState {
    list: Pokemon[];
}

const initialState: PokemonState = { list: [] };

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {
        setPokemonList(state, action: PayloadAction<Pokemon[]>) {
            state.list = action.payload;
        },
        addNewPokemon(state, action: PayloadAction<Pokemon>) {
            state.list.unshift(action.payload);
        },
    },
});

export const { setPokemonList, addNewPokemon } = pokemonSlice.actions;

export default pokemonSlice.reducer;
