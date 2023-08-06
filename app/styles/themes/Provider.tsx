import React from "react";
import { ThemeProvider } from "@emotion/react";
import {ThemeDark, ThemeLight} from "~/styles/themes/themes";
import useDarkMode from 'use-dark-mode';
import Toogle from "~/styles/themes/toogle";

const Provider: React.FC = ({ children }) => {
    const darkMode = useDarkMode(true);
    const currentTheme = darkMode.value ? ThemeDark : ThemeLight;
    return (
        <ThemeProvider theme={currentTheme}>
            <Toogle.Provider
                value={{
                    isDarkTheme: darkMode.value,
                    toggleTheme: darkMode.toggle,
                }}
            >
                {children}
            </Toogle.Provider>
        </ThemeProvider>
    )
}

export default Provider;