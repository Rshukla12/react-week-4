import React, { useState } from "react";

const ThemeContext = React.createContext("");

const themeTemp = {
    light: {
        color: "black",
        backgroundColor: "white"
    },
    dark: {
        color: "white",
        backgroundColor: "black"
    }
}

const ThemeContextProvider = ( { children } ) => {
    const [ theme, setTheme ] = useState("light");
    const themeData = themeTemp;

    const toggleTheme = () => {
        setTheme( theme => theme === "light" ? "dark" : "light" );
    }

    const value = [ { theme , themeData }, toggleTheme ];

    return (
        <ThemeContext.Provider
            value={ value }
        >
            {children}
        </ThemeContext.Provider>
    )
}

export {
    ThemeContext,
    ThemeContextProvider
}