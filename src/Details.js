import React, { Component } from 'react';
import { searchISBN } from './actions';
import { Grid, Row, Col, Label } from "react-bootstrap";
import './scss/app.css';
import Navbar from './Home'



const AllDetails = () => {
    return (
        <Grid fluid >
            <Row>
                <Col md={6} sm={6} xs={6} className='border' >
                    <div>
                        <img src='http://www.encuentos.com/wp-content/uploads/2009/08/libros1.jpg ' className='img_book img-responsive' />
                    </div>
                </Col>
                <Col md={6} sm={6} xs={6}  >
                    <h1><u>TITULO DEL LIBRO</u></h1>
                    <h4> SINOPSIS:</h4>
                    <p>You have the potential to relieve most ailments with your hands.is fully illustrated guide by Aaron Stein, Ph.D., distills acupressure into simple exercises that can be used to alleviate wide range of medical condition.Ailments Covered by the Acupressure Guide:Headache and Migraine: </p>
                    <br/>
                    <Row>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <p><b className='green'>AUTOR:</b><span>  Nombre del autor</span></p>

                        </Col>
                        <Col lg={6} md={6} sm={6} xs={12} >
                            <p className='price_d' >&#36;<span> <b  >4.34</b></span> </p>
                        </Col>


                    </Row>
                </Col>
            </Row>
        </Grid>

    )
}

const Details = () => {
    return (
        <div>
            <Navbar />
            <AllDetails />
        </div>
    );
}
export default Details;