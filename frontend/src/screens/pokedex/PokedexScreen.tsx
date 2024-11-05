import { useState } from 'react';
import PokemonTable from '../../components/PokemonTable';
import { useTheme } from '../../context/useTheme';
import PokedexScreenWrapper from './pokedexScreen.style';
import styled from 'styled-components';
import AddPokemonForm from '../../components/AddPokemonForm';
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
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleImageClick = () => {
        setIsFormVisible((prev) => !prev);
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
            {isFormVisible && <AddPokemonForm />}
            <div className="pokedex_container">
                <PokemonTable />
            </div>
        </PokedexScreenWrapper>
    );
};

export default PokedexScreen;
