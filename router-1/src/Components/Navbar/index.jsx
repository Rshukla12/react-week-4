import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  textDecoration: "none",
  padding: 1.5,
  color: "black"
}

const NavBar = () => {
  return (
    <div style={{display: "flex", gap: "1rem", justifyContent: "center", border:"1px solid black" }}>
    <Link style={style} to="/">Home</Link>
    <Link style={style} to="/about-us">About</Link>
    <Link style={style} to="/contact">Contact</Link>
    <Link style={style} to="/services">Services</Link>
    <Link style={style} to="/login">Login</Link>
    </div>
  )
}

export default NavBar
