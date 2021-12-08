import React, { useContext } from "react";
import styled from "styled-components";
import { ThemeAppContext } from "../Context/ThemeAppContextProvider";
import dots from "../SVGs/Dots.svg";

const Data = styled.div`
    display: flex;
    width: 24rem;
    margin-left: 0.25rem;
    justify-content: space-between;
    align-items: center;
    height: 5rem;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.2rem;
    height: 2rem;
    text-align: left;
    & > * {
        margin:0rem;
        padding: 0rem;
    }
    & > p {
        font-size: 0.7rem;
        color: gray
    }
`;

const ImageNameContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    height: 3rem;
    margin-left: 0.3rem;
    align-items: center;
`;

const ScoreInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1rem;
    margin-left: 0.3rem;
    margin-top: 0.5rem;
`;

const Range = styled.div`
    height: 7px;
    width: 100%;
    border-radius: 10px;
    background: #d3d3d3;
    margin-top: 0.5rem;
`;

const Slider = styled.div`
    height: 7px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    width: ${props => props.width || "30%" };
    background-color: ${props => props.color || "#4072EE"};
`; 



const UserCardElem = styled.div`
    padding: 1rem 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-bottom: 1px solid #4072dd27;
`;

const Profile = styled.div`
    width: 2rem;
    height: 2rem;
    margin-top: 0.5rem;
    border-radius: 50%;
    background: ${props => `Url(${props.src})` };
    background-size: cover;
`;



const UserCard = ({ name, location, avataar, level, points, color }) => {
    const width = `${( points/( level * 400) )*100}%`;

    return (
        <UserCardElem>
            <ImageNameContainer>
                <Profile src={avataar} />
                <Data>
                    <Info>
                        <h4>{name}</h4>
                        <p>{location}</p>
                    </Info>
                    <img src={dots} alt="options" />
                </Data>
            </ImageNameContainer>
            <Range>
                <Slider
                    width={width}
                    color={color}
                />
            </Range>
            <ScoreInfo>
                <div>Professional Level {level}</div>
                <h4>{points} Points</h4>
            </ScoreInfo>
        </UserCardElem>
    )
}

const ActiveUsersElem = styled.div`
    background: ${props => props.isDarkMode === true ? "#292E33" : "#ffffff" };
    box-shadow: 0px 0px 3px 2px #4072dd13;
    width: 452px;
    margin-left: 4.5rem;
    display: flex;
    flex-direction: column;
`;

const UserTop = styled.div`
    padding: 0rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > h3 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 2rem;
        margin: 0rem;
        padding: 0rem;
    }
`;

const Users = [
    {
        name: "Nrupal Dev",
        avataar: "/Resources/Bitmap1.png",
        location: "Banglore, India",
        level: "15",
        points: "4723",
        color: "#29CB97"
    },
    {
        name: "Sandhya",
        avataar: "/Resources/Bitmap2.png",
        location: "Banglore, India",
        level: "11",
        points: "2339",
        color: "#4072EE"
    },
    {
        name: "Elon Tusk",
        avataar: "/Resources/Bitmap3.png",
        location: "California, USA",
        level: "6",
        points: "1884",
        color: "#B558F6"
    }
    
]

const ActiveUsers = () => {
    const [isDark] = useContext(ThemeAppContext);

    return (
        <ActiveUsersElem isDarkMode={isDark} >
            <UserTop>
                <h3>Active Users</h3>
                <h4>for August 2020</h4>
            </UserTop>
            {
                Users?.map( user => (
                    <UserCard
                        name={user.name}
                        color={user.color}
                        location={user.location}
                        points={user.points}
                        level={user.level}
                        avataar={user.avataar}
                    />
                ))
            }
        </ActiveUsersElem>
    )
}

export default ActiveUsers;