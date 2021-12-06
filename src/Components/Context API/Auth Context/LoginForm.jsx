import React,{ useContext, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContextProvider";


const InputBox = styled.form`
    width: 40%;
    margin: 5rem auto;
    border: 1px solid palevioletred;
`;

const InputRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    gap: 1rem;
    padding: 0.1rem;
`;
    
const Input = styled.input`
    border: none;
    border-bottom: 2px solid palevioletred;
    font-size: 1.3rem;
    &:focus {
        outline: 0;
    }
`;

const Login = styled.input`
    background-color: #f6425b;
    padding: 0.5rem 1.5rem;
    width: 40%;
    margin: 1rem auto;
    color: white;
    font-weigth: 500;
    font-size: 1.5rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

const initialState = {
    email: "",
    password: ""
}


const LoginForm = ( ) => {
    const [ state, setState ] = useState( initialState );
    const { setIsAuth, setIsLogin } = useContext( AuthContext );
    const [ isIncorrect, setIsIncorrect ] = useState( false );

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post( "https://reqres.in/api/login", state );
            console.log( res.data.token );
            if ( res.data.token ) {
                setIsAuth( true );
                setIsLogin( false );
                setIsIncorrect(false);
            }
            else {
                setIsIncorrect(true); 
                setIsAuth( false );
            };
        } catch ( err ) { 
            console.log( err )
            setIsIncorrect(true);
        }
    }


    return (
        <InputBox onSubmit={handleLogin}>
            Login
            { isIncorrect && <div>Incorrect Password or email</div> }
            <InputRow>
                <label htmlFor="email">Email</label>
                <Input type="email" name="email" value={state.email} onChange={handleChange} required />
            </InputRow>
            
            <InputRow>
                <label htmlFor="password">Password</label>
                <Input type="password" name="password" value={state.password} onChange={handleChange} required />
            </InputRow>

            <Login type="submit" value="Login" />
        </InputBox>
    )
}

export default LoginForm;