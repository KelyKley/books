import React, {Component} from 'react';
// import Utils from './Utils.js';
import {searchISBN} from './actions';

 //import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'


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

const Search = () => {
    const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    searchISBN(this.isbn.value);
     this.isbn.value = "";
  }
    return (
        <div className="input-group">
        <form className="form-search" onSubmit = {onSubmit}>
            <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
            <input id="search" type="text" className="search form-control" ref={(e) => this.isbn = e}  placeholder="Buscar..."/>
            <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

const Results = () => {
    return(
        <div className="card col-md-3 col-xs-4 col-sm-3">
            <img className="portada" src="http://www.gandhi.com.mx/media/catalog/product/i/m/image_1165_1_276913.jpg" alt="Portada" />
            <div className="container-card">
                <h4><b>Cien años de soledad</b></h4> 
                <p>Gabriel Garcia Marquez</p> 
                <button className="text-right button-sgte">Mas detalles...</button> 
            </div>
        </div>
    );
}

const Book = () => {
    return (
        <div>
            <Navbar/>
            <Search/>
            <hr/>
            <Results/>
        </div>
    );
}
export default Book;