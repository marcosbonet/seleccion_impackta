import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContent';
import { ThemeContextType } from '../theme/types';

export const useTheme = (): ThemeContextType => useContext(ThemeContext);
