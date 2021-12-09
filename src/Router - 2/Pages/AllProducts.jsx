import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

const ProductCard = styled.div`
    width: 32rem;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    gap: 1rem;
    border: 1px solid gray;
    & > div {
        width: 7rem;
    }
`

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const fetchData = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/products");
            setProducts( data );
        } catch ( err ) {
            setIsError(true);
            console.log(err);
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect( () => {
        fetchData();
    }, [])

    return (
        <div>
            {
                isLoading ? (
                    <div>...Loading</div>
                ) : isError ? (
                    <div>...Error</div>
                ) : (
                    <div>

                        <ProductCard >
                            <div>Id</div>
                            <div>Name</div>
                            <div>Price</div>
                            <div>Action</div>
                        </ProductCard>
                
                        {
                            products.map( product => (
                                <ProductCard key={product.id} >
                                    <div>{product.id}</div>
                                    <div>{product.name}</div>
                                    <div>{product.price}</div>
                                    <div>
                                        <Link to={`/products/${product.id}`}>More Details</Link>
                                    </div>
                                </ProductCard>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default AllProducts;