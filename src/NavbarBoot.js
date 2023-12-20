import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import icon  from './img/vegeteran-food.png'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function NavbarBoot() {
  const expand = 'sm';

  return (
    <div>


      <Navbar expand={expand} className="  " style={{background:"#ffff"}}  >
        <Container className='mx-auto w-80 justify-content-between'  >
          <div className="icon-parent">
          <img src={icon} alt="" />
      <p>Almaty Restaurant</p>
          </div>
        


          <Navbar.Toggle className='mx-4' aria-controls= {`offcanvasNavbar-expand-${expand}`} />

          <Navbar.Offcanvas
              className="flex-grow-0"
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton className='mx-3 my-3'>
   
   
            </Offcanvas.Header>


     
              <Nav className=" gap-3 navbaratag paddingNow" >
                <Link  to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/ourmenu'>Menu</Link>
                <Link to="/description">Description</Link>
                <Link to="/specials">Specials</Link>
                <Link to="/reservation">Reservation</Link>
                <Link to="/remarks">Remarks</Link>
                <Link to='/contact'>Contact</Link>

              

              </Nav>
  
          </Navbar.Offcanvas>

      


        </Container>
      </Navbar>





    </div>



  );
}

export default NavbarBoot;
