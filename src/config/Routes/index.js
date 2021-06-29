import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Login from '../../components/pages/Login'
import Dashboard from '../../components/pages/Dashboard'
import About from '../../components/pages/About'
import Provinsi from '../../components/pages/Provinsi'
  

const Routes = () =>{
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Dashboard/>
                </Route>
                
                <Route path="/login">
                    <Login/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/provinsi">
                    <Provinsi/>
                </Route>
            </Switch>
        </Router>

    )
}
export default Routes;