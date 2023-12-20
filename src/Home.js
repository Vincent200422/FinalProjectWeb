import React from 'react'
import { Carousel, Container } from 'react-bootstrap'
import Menu from './Menu/Menu'
import HealthyFood from './healthy/HealthyFood'
import Buttons from './components/button/Buttons'
import Service from './Service/Service'
import FastFood from './Fastfood/FastFood'
import CarouselMov from './carousel/Carousel'
import { Link } from 'react-router-dom';

function Home() {
  return (

    <>
    <div className="home">
      <Container className='containerone'>
      <div className="d-flex justify-content-center align-items-center flex-column " style={{height:"850px" }}>

      <h1  className='home-tag' style={{fontSize:"100px",  fontFamily: 'Playfair Display ',  }}>Welcome to <br/> Almaty Restaurant </h1>

      <p className='text-color' style={{fontSize:"20px",}}>Enjoy the world of flavors with our diverse culinary dishes at the  <br/>Almaty Restaurant. Immerse yourself in a culinary journey where <br/>every dish is prepared to perfection, promising a delightful experience. </p>

      <div className="buttons-parent">

      <Link to="/about">
      <Buttons 
        classNames="red-color"
        borderRadius="118px" 
        background="#3EAD34" 
        color="#FFFFFF"
      >
        About us 
      </Buttons>
      </Link>





      <Link to="/ourmenu">
    <Buttons 
      classNames="white-color"
      borderRadius="118px"
      border="3px solid #2C2F24"
      background="white"
      color="#182226"
    >
      View Menu
    </Buttons>
  </Link>
      </div>
      </div>
      
      







    </Container>
      </div>

<Menu/>
<HealthyFood/>
<Service/>
<CarouselMov/>
<FastFood/>

    </>

  )
}

export default Home
