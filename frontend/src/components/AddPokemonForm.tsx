import React, { useState } from 'react';
import styled from 'styled-components';

import { Pokemon } from '../models/pokemon.model';

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContainer = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 500px; /* Ancho del modal */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
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

const AddPokemonForm: React.FC<{ onClose: () => void; onAdd: (newPokemon: Pokemon) => void }> = ({
    onClose,
    onAdd,
}) => {
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

        alert('¡Pokémon agregado exitosamente!');

        onAdd(newPokemon);
        onClose();

        setName('');
        setHeight('');
        setWeight('');
        setNumber('');
        setHealth('');
        setImageUrl('');
        onClose();
    };

    return (
        <ModalBackground>
            <ModalContainer>
                <h2>Add a New Pokémon</h2>
                <FormWrapper onSubmit={handleSubmit}>
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
                    <button type="submit">Save Pokémon</button>
                    <button type="button" onClick={onClose}>
                        Close
                    </button>
                </FormWrapper>
            </ModalContainer>
        </ModalBackground>
    );
};

export default AddPokemonForm;
