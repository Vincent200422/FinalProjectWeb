import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import individual  from '../img/indivisual_set.png'
import restaurant  from '../img/restaurant_set.png'
import caterings  from '../img/caterings_set.png'
import events  from '../img/events_set.png'
import Restaurants from '../img/restaurant-interior.jpg'
import './index.css'


function Service() {
  return (

    <>

    <div className="Service">

    
    <Container className='containerSome' >
        <h2 className='ServiceTag'>Discover exclusive facilities <br/> for your events</h2>
      <Row  className=''>
        <Col  >
        <div className="boxes">
        <img src={individual} className='img-fluid' alt="" />
            <h3>Individual approach</h3>
            <p>Decorate your events with our unique catering services.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
  
        <img src={restaurant}  className='img-fluid' alt="" />

            <h3>Restaurant</h3>
            <p>Immerse yourself in the future of food in our restaurant.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
            <img src={caterings} className='img-fluid' alt="" />
            <h3>Caterings</h3>
            <p>Get to know the epitome of catering excellence at every turn.</p>
        </div>
        </Col>
        <Col  >
        <div className="boxes">
            <img src={events} className='img-fluid' alt="" />
            <h3>Events</h3>
            <p>Create an unforgettable experience with our event management services.</p>
        </div>
        </Col>
      </Row>

    </Container>
    </div>
    </>
  )
}

export default Service
