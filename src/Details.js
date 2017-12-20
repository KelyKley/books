import React, { Component } from 'react';
import { searchISBN } from './actions';
import { Grid, Row, Col, Label } from "react-bootstrap";
import './scss/app.css';
import Navbar from './Home'



const AllDetails = ({equalBooks, selected}) => {
    return (
        <Grid fluid >
            <Row>
                <Col md={6} sm={6} xs={6} >
                    <div>
                        <img src={equalBooks[selected].img} className='img_book img-responsive' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={6} >
                    <h1>{equalBooks[selected].title}</h1>
                    <h4> SINOPSIS</h4>
                    <p>{equalBooks[selected].description} </p>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <p><b>AUTOR:</b><span> {equalBooks[selected].author} </span></p>

                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <p className='price_d' >&#36;<span> <b  >{equalBooks[selected].price}</b></span> </p>
                        </Col>


                    </Row>
                </Col>
            </Row>
        </Grid>

    )
}

const Details = ({equalBooks, selected}) => {
    return (
        <div>
            <AllDetails equalBooks={equalBooks} selected={selected} />
        </div>
    );
}
export default Details;