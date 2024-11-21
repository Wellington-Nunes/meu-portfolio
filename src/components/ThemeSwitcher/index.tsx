import { ReactNode, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { ButtonToggle } from "./styles";
import { darkTheme, lightTheme } from "../../styles/ThemeConfig";
import { GlobalStyles } from "../../styles/GlobalStyles";

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface ThemeSwitcherProps {
    children: ReactNode;
}

type ThemeType = "light" | "dark";

const getInitialTheme = (): ThemeType => {
    if (typeof window === "undefined") {
        return "light";
    }

    const themeLocalStorage = localStorage.getItem("theme") as ThemeType;
    if (themeLocalStorage) {
        return themeLocalStorage;
    }

    const themeSystem = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    return themeSystem;
};

const ThemeSwitcher = ({ children }: ThemeSwitcherProps) => {
    const [theme, setTheme] = useState<ThemeType>("light");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (!loading) {
            localStorage.setItem("theme", theme);
        }
    }, [theme, loading]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    if (loading) {
        return null;
    }

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ButtonToggle onClick={toggleTheme}>
                {theme === "light" ? (
                    <LightModeIcon style={{ color: "#323444", fontSize: "20px" }} />
                ) : (
                    <DarkModeIcon style={{ color: "#FAFAFA", fontSize: "20px" }} />
                )}
            </ButtonToggle>
            {children}
        </ThemeProvider>
    );
};

export default ThemeSwitcher;
