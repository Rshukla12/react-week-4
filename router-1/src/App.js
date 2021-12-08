import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navbar'

function App() {
  return (
   <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>Home Page</div>
        </Route>
        <Route exact path="/about-us">
          <div>About Page</div>
        </Route>
        <Route exact path="/contact">
          <div>Contact Page</div>
        </Route>
        <Route exact path="/services">
          <div>Services Page</div>
        </Route>
        <Route exact path="/login">
          <div>Login Page</div>
        </Route>
    </Switch>
   </BrowserRouter>
  )
}

export default App