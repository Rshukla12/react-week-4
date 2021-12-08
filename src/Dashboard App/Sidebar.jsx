import React, { useContext } from "react";
import styled from "styled-components";
import stats from "../SVGs/Stats.svg";
import maps from "../SVGs/Maps.svg";
import shopping from "../SVGs/Shopping.svg";
import messages from "../SVGs/Messages.svg";
import files from "../SVGs/Files.svg";
import settings from "../SVGs/Settings.svg";
import plus from "../SVGs/Plus Icon.svg";
import { ThemeAppContext } from "../Context/ThemeAppContextProvider";


const MainSidebar = styled.div`
    position: fixed;
    left: -1px;
    bottom:0;
    top: 0;
    border-left: 1px solid #d3d3d3;
    background-color: ${ props => props.isDarkMode === true ? "#16191C" :"#ffffff" };
    color:  ${ props => props.isDarkMode === true ? "white": "black"};
    width: 5rem;
`;
    
const Profile = styled.div`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    position: relative;
    top: 2rem;
    left: 1.5rem;
    background: ${props => `Url(${props.src})` };
    background-size: cover;
`;

const GreenDot = styled.div`
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #29CB97;
    border: 2px solid white;
    position: relative;
    left: 20px;
    top: -0.2rem;
`;

const Icon = styled.div`
    width: 3rem;
    height: 3rem;
    margin: auto;
    border-bottom: 1px solid #d3d3d3;
    padding-bottom: 1rem;
    background-color: inherit;
    color: inherit;
`;

const ActiveIcon = styled.div`
    width: 4rem;
    position: relative;
    height: 3rem;
    right: 0rem;
    top: 19%;
    left: 0rem;
    padding: 0.45rem 1rem 0.45rem 0.5rem;
    background: linear-gradient(#4072EE, #679CF6);
    display: flex;
    justify-content: center;
    border-bottom: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`;
    

const AddMore = styled.div`
    width: 2.5rem;
    height: 2.5rem;
    position: fixed;
    bottom: 5rem;
    left: 1.25rem;
    border-radius: 50%;
    background-color: #29CB97;
    display: flex;
    justify-content: center;
    align-items: center;
    & > img {
        width: 60%;
        height: 60%;
    }
`;

const Icons = styled.div`
    height: 40%;
    position: fixed;
    top: 33%;
    left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
    background-color: inherit;
    color: inherit;
`;

const SideBar = () => {
    const [isDark] = useContext(ThemeAppContext)

    return (
        <MainSidebar isDarkMode={isDark} >
            <Profile src="/Resources/Bitmap.png">
                <GreenDot />
            </Profile>
            <ActiveIcon>
                <img src={stats} alt="stats" />
            </ActiveIcon>
            <Icons>
                <Icon>
                    <img src={maps} alt="maps" />
                </Icon>
                <Icon>
                    <img src={shopping} alt="maps" />
                </Icon>
                <Icon>
                    <img src={messages} alt="maps" />
                </Icon>
                <Icon>
                    <img src={files} alt="maps" />
                </Icon>
                <Icon>
                    <img src={settings} alt="maps" />
                </Icon>
            </Icons>

            <AddMore>
                <img src={plus} alt="plus" />
            </AddMore>

        </MainSidebar>
    )
}

export default SideBar;
