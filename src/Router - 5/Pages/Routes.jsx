import React, { useContext } from "react";
import Welcome from "./Home";
import { Route, Switch, Redirect } from "react-router-dom";
import Dashboard from "./Dashboard";
import { AuthContext } from "../Context/AuthContextProvider";
import Login from "./Login";

const Settings = () => {
    return (
        <div>Settings</div>
    )
}

const PrivateRoute = () => {
    const [auth] = useContext(AuthContext);

    if ( !auth ){
        return (
            <Redirect to="/login" />
        )
    }

    return (
        <Switch>
            <Route exact path="/dashboard" >
                <Dashboard />
            </Route>
            <Route path="/dashboard/settings" >
                <Settings />
            </Route>
        </Switch>
    )
}

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" >
                <Welcome />
            </Route>
            <Route path="/dashboard" >
                <PrivateRoute />
            </Route>
            <Route exact path="/login" >
                <Login />
            </Route>

        </Switch>
    )
}

export default AllRoutes;