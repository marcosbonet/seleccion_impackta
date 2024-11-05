import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addPokemon } from '../redux/actions/pokemonActions.js';
import { AppDispatch } from '../redux/store.js';

const Container = styled.div`
    width: 957px; /* Ancho del contenedor */
    margin: 0 auto; /* Centrar el contenedor horizontalmente */
    padding: 20px; /* Espaciado interno */
    border: 1px solid #ccc; /* Borde opcional */
    border-radius: 8px; /* Bordes redondeados opcionales */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra opcional */
`;

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
    gap: 10px;

    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px;
        background-color: #4caf50;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #45a049;
        }
    }
`;

const AddPokemonForm: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [number, setNumber] = useState('');
    const [health, setHealth] = useState('');

    const generateId = () => Math.floor(Math.random() * 10000);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newPokemon = {
            id: generateId(),
            name,
            height: parseFloat(height),
            weight: parseFloat(weight),
            number: parseInt(number, 10),
            health: parseInt(health, 10),
            url: imageUrl,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        dispatch(addPokemon(newPokemon));

        setName('');
        setHeight('');
        setWeight('');
        setNumber('');
        setHealth('');
        setImageUrl('');
    };

    return (
        <Container>
            <FormWrapper onSubmit={handleSubmit}>
                <h2>Add a New Pokémon</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Health"
                    value={health}
                    onChange={(e) => setHealth(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    required
                />
                <button type="submit">Add Pokémon</button>
            </FormWrapper>
        </Container>
    );
};

export default AddPokemonForm;
