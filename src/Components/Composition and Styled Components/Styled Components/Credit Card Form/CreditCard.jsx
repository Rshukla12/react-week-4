import React from "react";
import styled from "styled-components";

const Card = styled.div`
    position: relative;
    background: ${props => `Url(${props.src})` };
    margin: 10rem;
    width: 35rem;
    height: 25rem;
    background-size: cover;
`;

const CardText = styled.div`
    position: relative;
    top: 9rem;
    left: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    color: white;
`;

const CardNums = styled.div`
    width: 80%;
    text-align: left;
    font-size: 2.25rem;
`;


const CardFooter = styled.div`
    display: flex;
    gap: 1.5rem;
    width: 65%;
`; 

const CardDetail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    text-align: left;
    width: 15rem;
`;
    
const CardDetailTitle = styled.div`
    font-size: 0.6rem;
`;
    
const CardDetailInfo = styled.div`
    font-size: 1.2rem;
`;

const defaultState = {
    nums : "4234 XXXX XXXX XX84",
    name : "John Doe",
    mon : "MM",
    year: "YYYY",
    cvv: "XXX"
};

const CreditCard = ( { card } ) => {
    let cardCopy = { ...card }
    
    for ( const key in defaultState ){
        if ( !cardCopy[key] ){
            cardCopy[key] = defaultState[key];
        }
    }

    let { nums, name, mon, year, cvv } = cardCopy;
    
    return (
        <div>
            <Card src="/card.png">
                <CardText>
                    <CardNums>
                        {nums}
                    </CardNums>
                    <CardFooter>
                        <CardDetail>
                            <CardDetailTitle>
                                CARD HOLDER
                            </CardDetailTitle>
                            <CardDetailInfo>
                                {name}
                            </CardDetailInfo>
                        </CardDetail>
                        <CardDetail>
                            <CardDetailTitle>
                                EXPIRY
                            </CardDetailTitle>
                            <CardDetailInfo>
                                {mon}/{year.slice(2)}
                            </CardDetailInfo>
                        </CardDetail>
                        <CardDetail>
                            <CardDetailTitle>
                                CVV
                            </CardDetailTitle>
                            <CardDetailInfo>
                                {cvv}
                            </CardDetailInfo>
                        </CardDetail>
                    </CardFooter>
                </CardText>
            </Card>
        </div>
    );
}

export default CreditCard;