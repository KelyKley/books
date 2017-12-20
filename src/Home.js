import React, {Component} from 'react';
// import Utils from './Utils.js';
import {searchISBN} from './actions';

// import {BrowserRouter, Route, Switch, NavLink, Redirect} from 'react-router-dom'

const Home = () => {
     const onSubmit = (e) => {
		e.preventDefault();
		console.log ( 'this..', this);//con truco, es el connect el this.
    searchISBN(this.isbn.value);
     this.isbn.value = "";
  }
    return (
        <div>
             <form onSubmit = {onSubmit}>
        <div className="form-group">
          <label >Name User: </label>
          <input type="text" className="form-control" ref={(e) => this.isbn = e} />
        </div>
        <button type="submit" className="btn btn-default">Submit</button>
      </form>
        </div>
    )
}

export default Home;