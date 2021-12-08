import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeAppContext } from "../Context/ThemeAppContextProvider";
import ActiveUsers from "./ActiveUsers";
import Header from "./Header";

const MainScreenElem = styled.div`
    display: flex;
    position: fixed;
    top: 0rem;
    left: 4.7rem;
    right: 0rem;
    bottom: 0rem;
    z-index: -1;
    display: flex;
    flex-direction: column;
    gap: 2rem; 
    background-color: ${props => props.isDarkMode === true ? "#1F2327" : "#F5F6FA"};
    color: ${props => props.isDarkMode === true ? "#f3f3f3" : "#000000"};
`;

const MainScreen = ( ) => {
    const [ isDark ] = useContext( ThemeAppContext );

    return (
        <MainScreenElem isDarkMode={isDark}>
            <Header />
            <ActiveUsers />
        </MainScreenElem>
    )
}

export default MainScreen;