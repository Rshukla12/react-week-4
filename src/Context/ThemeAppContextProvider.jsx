import React, { useState } from "react";

const ThemeAppContext = React.createContext("");

const ThemeAppContextProvider = ( { children } ) => {
    const [ isDark, setIsDark ] = useState(false);

    const toggleTheme = () => {
        setIsDark( !isDark );
    }

    const value = [ isDark, toggleTheme ];

    return (
        <ThemeAppContext.Provider value={value} >
            { children }
        </ThemeAppContext.Provider>
    )
}

export {
    ThemeAppContext,
    ThemeAppContextProvider
}