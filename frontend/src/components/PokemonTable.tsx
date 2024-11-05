import React from 'react';
import styled from 'styled-components';
import { Theme } from '../theme/types';
import { useTheme } from '../context/useTheme';

const Container = styled.div`
    width: 957px; /* Ancho del contenedor */
    margin: 0 auto; /* Centrar el contenedor horizontalmente */
    padding: 20px; /* Espaciado interno */
    border: 1px solid #ccc; /* Borde opcional */
    border-radius: 8px; /* Bordes redondeados opcionales */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra opcional */
`;

const Table = styled.table<{ theme: Theme }>`
    width: 100%;
    border-collapse: collapse;

    th {
        background-color: ${({ theme }) => theme.tableHeaderBackground};
        color: ${({ theme }) => theme.text};
        text-align: center;
        padding: 10px;
    }

    td {
        background-color: ${({ theme }) => theme.tableRowBackground};
        color: ${({ theme }) => theme.text};
        padding: 10px;
        text-align: center;
        transition: background-color 0.3s;

        &:hover {
            background-color: ${({ theme }) => theme.tableRowHover};
        }
    }
`;

interface PokemonTableProps {
    pokemonList: { id: number; name: string; height: number; weight: number; url: string }[];
}

const PokemonTable: React.FC<PokemonTableProps> = ({ pokemonList }) => {
    const { theme } = useTheme();

    return (
        <Container>
            <Table theme={theme}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Weight</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemonList.map((pokemon) => (
                        <tr key={pokemon.id}>
                            <td>{pokemon.name}</td>
                            <td>{pokemon.height}</td>
                            <td>{pokemon.weight}</td>
                            <td>
                                <img
                                    src={pokemon.url}
                                    alt={pokemon.name}
                                    style={{ width: '50px', height: '50px' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PokemonTable;
