import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ProductCard = styled.div`
    width: 25rem;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    border: 1px solid gray;
    & > div {
        width: 7rem;
    }
`

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);


    const fetchData = async ( { id } ) => {
        try {
            const { data } = await axios.get(`http://localhost:3000/products/${id}`);
            setProduct( data );
        } catch ( err ) {
            setIsError(true);
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect( () => {
        fetchData({id});
    }, [ id ])

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Error</div>
                ) : (
                    <ProductCard>
                        <div>{product.id}</div>
                        <div>{product.name}</div>
                        <div>{product.price}</div>
                    </ProductCard>
                )
            }
        </div>
    )
}

export default Product;