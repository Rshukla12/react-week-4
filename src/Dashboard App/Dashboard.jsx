import React from "react";
import styled from "styled-components";
import MainScreen from "./MainScreen";
import SideBar from "./Sidebar";

const DashBoard = styled.div`
    display: flex;
    position: fixed;
    gap: 0;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;


const Dashboard = () => {
    return (
        <DashBoard>
            <SideBar />
            <MainScreen />
        </DashBoard>
    )
}

export default Dashboard;