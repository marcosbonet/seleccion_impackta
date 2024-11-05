export interface Theme {
    background: string;
    text: string;
    tableHeaderBackground: string;
    tableRowBackground: string;
    tableRowHover: string;
}

export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}
export const MainTheme = {
    light: {
        background: '#FFFFFF',
        text: '#000000',
        tableHeaderBackground: '#f0f0f0',
        tableRowBackground: '#FFFFFF',
        tableRowHover: '#f9f9f9',
    } as Theme,
    dark: {
        background: '#121212',
        text: '#FFFFFF',
        tableHeaderBackground: '#1F1F1F',
        tableRowBackground: '#1F1F1F',
        tableRowHover: '#333333',
    } as Theme,
};
