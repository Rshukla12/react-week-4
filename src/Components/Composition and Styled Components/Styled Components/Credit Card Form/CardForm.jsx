import React from "react";
import styled from "styled-components";
import User from "../../../../user.svg";
import CardSvg from "../../../../credit-card.svg";
import Lock from "../../../../lock.svg";
import Calender from "../../../../calendar.svg"

const defaultState = {
    nums : "4234 XXXX XXXX XX84",
    name : "John Doe",
    mon : "MM",
    year: "YYYY",
    cvv: "XXX"
};

const CardFormElem = styled.div`
    width: 70%
    position: relative;
    margin-top: 7rem;
    text-align: left;
`;

const Form = styled.form`
    width: 70%;
    max-width: 40rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const Footer = styled.div`
    display: flex;
    width: 100%;
    gap: 12.5%;
    & > div {
        width: 25%;
    }
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const InputTitle = styled.div`
    font-size: 0.8rem;
`;

const InputRow = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 2px solid palevioletred;
    gap: 1rem;
    padding: 0.1rem;
`;

const InputIcon = styled.img`
    fill: #f6425b;
    width: 1.5rem;
`;


const Input = styled.input`
    border: none;
    font-size: 1.3rem;
    &:focus {
        outline: 0;
    }
`;


const PaymentAmount = styled(InputRow)`
    border-bottom:none;
    gap: 0.25rem;
    font-size: 1.5rem;
    justify-content: center;
`;

const PaymentAmountCol = styled.div`
    color: palevioletred;
`;

const Pay = styled.button`
    background-color: #f6425b;
    padding: 0.75rem 1.5rem;
    width: 40%;
    margin: auto;
    color: white;
    font-weigth: 500;
    font-size: 1.5rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const CardForm = ( { card, updateCard } ) => {

    // const { nums, name, mon, year, cvv } = card;
    const handleChange = (e) => {
        let { name, value } = e.target;

        if ( name === "nums" && value.length > 0  && e.nativeEvent.inputType !== "deleteContentBackward" ){
            if ( value.length > 19 ) return;
            if ( value.length < 5 && value.length % 4 === 0 ) value += " ";
            if ( value.length < 12 && value.length % 9 === 0 ) value += " ";
            if ( value.length < 15 && value.length % 14 === 0 ) value += " ";
        }

        updateCard({
            ...card,
            [name]: value
        })
    }

    return (
        <CardFormElem>
            <h3>Payment Details</h3>
            <Form>
                <InputBox>
                    <InputTitle>
                        CARDHOLDER NANE
                    </InputTitle>
                    <InputRow>
                        <InputIcon src={User} />
                        <Input placeholder={defaultState.name} onChange={handleChange} name="name" value={card.name}/>
                    </InputRow>
                </InputBox>
                <InputBox>
                    <InputTitle>
                        CARD NUMBER
                    </InputTitle>
                    <InputRow>
                        <InputIcon src={CardSvg} />
                        <Input placeholder={defaultState.nums} onChange={handleChange} name="nums" value={card.nums} maxlength={19} />
                    </InputRow>
                </InputBox>
                <Footer>
                <InputBox>
                    <InputTitle>
                        EXPIRY MONTH
                    </InputTitle>
                    <InputRow>
                        <InputIcon src={Calender} />
                        <Input placeholder={defaultState.mon} onChange={handleChange} name="mon" value={card.mon}/>
                    </InputRow>
                </InputBox>
                <InputBox>
                    <InputTitle>
                        EXPIRY YEAR
                    </InputTitle>
                    <InputRow>
                        <InputIcon src={Calender} />
                        <Input placeholder={defaultState.year} onChange={handleChange} name="year" value={card.year}/>
                    </InputRow>
                </InputBox>
                <InputBox>
                    <InputTitle>
                        CVC
                    </InputTitle>
                    <InputRow>
                        <InputIcon src={Lock} />
                        <Input placeholder={defaultState.cvv} onChange={handleChange} name="cvv" value={card.cvv}/>
                    </InputRow>
                </InputBox>
                </Footer>
                <PaymentAmount>
                    Payment amount: <PaymentAmountCol>12,300 &#8377;</PaymentAmountCol>
                </PaymentAmount>
                <Pay>Pay</Pay>
            </Form>
        </CardFormElem>
    )
}

export default CardForm;