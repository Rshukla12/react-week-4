import React, { useState } from "react";
import styled from "styled-components";
import CardForm from "./Credit Card Form/CardForm";
import CreditCard from "./Credit Card Form/CreditCard";

const initialState = {
    nums : "",
    name : "",
    mon : "",
    year: "",
    cvv: ""
};

const Payment = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
`;

const StyledComponents = () => {
    const [card, setCard] = useState(initialState);

    return (
        <Payment>
            <CreditCard card={card} />
            <CardForm card={card} updateCard={setCard} />
        </Payment>
    )
}

export default StyledComponents;