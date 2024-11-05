import React, { createContext, useState } from 'react';
import { MainTheme } from '../theme';
import { ThemeContextType } from '../theme/types';
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noOp = () => {};
export const ThemeContext = createContext<ThemeContextType>({
    theme: MainTheme.light,
    toggleTheme: noOp,
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? MainTheme.dark : MainTheme.light;

    const toggleTheme = (): void => {
        setIsDark((prev) => !prev);
    };

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};
