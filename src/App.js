import React, { Component } from 'react';
import { connect } from "redux-zero/react";
import {
    HashRouter,
    Redirect,
    NavLink,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
import './css/app.css';

import Book from './Home';
import Details from './Details';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>                        
                </button>
                <a className="navbar-brand" href="#"><span className="glyphicon glyphicon-book"></span>    BookMe</a>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#"><span className="glyphicon glyphicon-user"></span> Regístrate</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Iniciar sesión</a></li>
                    <li><a href="#"><span className="glyphicon glyphicon-shopping-cart"></span>Carrito</a></li>
                </ul>
                </div>
            </div>
            </nav>

    )
}

const App = ({listbooks, equalBooks, selected}) => {
    return (
        <div>
            <Navbar/>
            <HashRouter>
                <Switch>
                    <Route path="/home" render={() => <Book equalBooks={equalBooks} selected={selected} />} />
                    <Route path = "/details" render = { () => <Details selected={selected}/>} />
                    <Route path='/plantilla' render={() => <Redirect to="/home" />} />
                    <Route exact path="/" render={() => <Book equalBooks={equalBooks} selected={selected}/>} />
                </Switch>
            </HashRouter>
        </div>
    )
}
const mapToProps = ({listbooks, equalBooks, selected}) => ({listbooks, equalBooks, selected});

export default connect(mapToProps)(App);
