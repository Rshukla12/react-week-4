import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeAppContext } from "../Context/ThemeAppContextProvider";

const HeadElem = styled.div`
    display: flex;
    justify-content: space-between;
    width: 452px;
    margin-left: 5%;
`;

const Slider = styled.div`
    width: 80px;
    height: 40px;
    border-radius: 20px;
    background-color: #c4c4c4;
`; 

const SlideBtn = styled.div`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    position: relative;
    top: -2px;
    left: ${props => props.isDarkMode === true ? "0%" : "50%"};
    transform: ${props => props.isDarkMode === true ? "translateX(80%)" : "translateX(-90%)"};
    background-color: ${props => props.isDarkMode === true ? "#29CB97" : "#2991CB"};
`;

const SlideContainer = styled.div` 
    display: flex;
    gap: 1rem;
    margin-top: 0.5rem;
    align-items: center;
`;


const Header = () => {
    const [ isDark, toggleTheme ] = useContext( ThemeAppContext );

    return (
        <HeadElem>
            <h1>My Dashboard</h1>
            <SlideContainer>
                <h4>Dark Mode</h4>
                <Slider onClick={toggleTheme} >
                    <SlideBtn isDarkMode={isDark}/>
                </Slider>
            </SlideContainer>
        </HeadElem>
    )
}

export default Header;