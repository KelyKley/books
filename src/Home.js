import React, {Component} from 'react';
// import Utils from './Utils.js';

import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="container-fluid">
                <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>                        
                </button>
                <a class="navbar-brand" href="#"><span class="glyphicon glyphicon-book"></span></a>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                </ul>
                </div>
            </div>
            </nav>
    )
}

const Search = () => {
    return (
        <div class="input-group">
            <span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span>
            <input id="email" type="text" class="search form-control" name="email" placeholder="Email"/>
        </div>
    );
}

const Results = () => {
    return(
        <div>
            
        </div>
    );
}

const Book = () => {
    return (
        <div>
            <Navbar/>
            <Search/>
        </div>
    );
}
export default Book;