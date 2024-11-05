import { useEffect, useState } from 'react';
import PokemonTable from '../../components/PokemonTable';
import { useTheme } from '../../context/useTheme';
import PokedexScreenWrapper from './pokedexScreen.style';
import styled from 'styled-components';
import AddPokemonForm from '../../components/AddPokemonForm';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { addPokemon, fetchHeaviestPokemon } from '../../redux/actions/pokemonActions';
import { Pokemon } from '../../models/pokemon.model';
const ToggleButton = styled.button<{ isDark: boolean }>`
    background-color: ${({ isDark }) => (isDark ? '#555' : '#ccc')}; /* Color de fondo */
    color: ${({ isDark }) => (isDark ? '#fff' : '#000')}; /* Color de texto */
    border: none;
    border-radius: 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: ${({ isDark }) => (isDark ? '#777' : '#aaa')}; /* Efecto hover */
    }
`;

const PokedexScreen = () => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === theme;
    const dispatch = useDispatch<AppDispatch>();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const pokemonList = useSelector((state: RootState) => state.pokemon.list);
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    useEffect(() => {
        dispatch(fetchHeaviestPokemon());
    }, [dispatch]);
    const handleAddPokemon = (newPokemon: Pokemon) => {
        dispatch(addPokemon(newPokemon));
        console.log('Pokemon added');
        handleCloseModal();
    };
    const handleImageClick = () => {
        setIsModalOpen(true);
    };
    return (
        <PokedexScreenWrapper>
            <div className="actions_container">
                <img
                    src="/assets/images/add_btn.png"
                    className="action_img"
                    onClick={handleImageClick}
                    style={{ cursor: 'pointer' }}
                />
                <ToggleButton isDark={isDark} onClick={toggleTheme}>
                    Toggle Theme
                </ToggleButton>
            </div>

            <div className="title_section">
                <h2>Pokédex de Impackta</h2>
            </div>

            {isModalOpen && <AddPokemonForm onClose={handleCloseModal} onAdd={handleAddPokemon} />}
            <div className="pokedex_container">
                <PokemonTable pokemonList={pokemonList} />
            </div>
        </PokedexScreenWrapper>
    );
};

export default PokedexScreen;
