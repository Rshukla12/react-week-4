import React from "react";
import { Route, Switch } from "react-router-dom";
import AllProducts from "../Pages/AllProducts";
import Home from "../Pages/Home";
import Product from "../Pages/Product";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Home />
            </Route>
            <Route exact path="/products" >
                <AllProducts />
            </Route>
            <Route exact path="/products/:id" >
                <Product />
            </Route>
            <Route>
                <div>Wrong Place, May be try HomePage</div>
            </Route>
        </Switch>
    )
};

export default AllRoutes;