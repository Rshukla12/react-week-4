import React from "react";
import {Link} from "react-router-dom";

const style = {
  textDecoration: "none",
  padding: 1.5,
  color: "black"
}

const Routes = [
  {
    to: "/",
    title: "Home"
  },
  {
    to: "/login",
    title: "Login"
  }, 
  {
    to: "/dashboard",
    title : "Dashboard"
  },
  {
    to: "/dashboard/settings",
    title : "Settings"
  }
];


const Navbar = () => {
  const Route = Routes;
  const styles = style;

  return (
    <div style={{display: "flex", gap: "1rem", justifyContent: "center", border:"1px solid black" }}>
    {Route.map( route => (
      <Link style={styles} key={route.to} to={route.to}>{route.title}</Link>
    ) )
    }
    </div>
  );
}

export default Navbar;