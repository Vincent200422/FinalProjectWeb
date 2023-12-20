import React from 'react'


import twitter from '../../img/1.png'
import facebook from '../../img/2.png'
import pixal  from '../../img/pexels-ash-376464 1.png'
import pixal1  from '../../img/pexels-ella-olsson-1640772 1.png'
import pixal2  from '../../img/pexels_venna_set.png'
import evil  from '../../img/eiliv-aceron-d5PbKQJ0Lu8-unsplash 1.png'
import './index.css'
import { Container } from 'react-bootstrap'
function Footer() {
  return (

      
      <div className="footer">
    <Container className='containersome'>
    <div className="box-container">
        <div className="box-footer">

        <div className="icon-parent" style={{justifyContent:"flex-start"}}>
         
      <p>Almaty Restaurant</p>
          </div>
        
            <p>Take a culinary journey in our esteemed restaurant, where every dish is a masterpiece cooked with passion and precision. Enjoy our warm hospitality and an atmosphere that embodies the essence of culinary excellence.</p>

            <div className="icons d-flex gap-2">
                <a href="">


               

                <img src={facebook} alt="" />
                </a>
                <a href="">

<img src={twitter} alt="" />
</a>

            </div>
        </div>
        <div className="box-footer">
           
            <h3 className='footer-tag'>Main pages</h3>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Description</a>
                 
 
        </div>
        <div className="box-footer">

      
            <h3 className='footer-tag'>Other pages</h3>
            <a href="#">Specials</a>
            <a href="#">Reservation</a>
            <a href="#">Remarks</a>
            <a href="#">Contact</a>
         
        
  
        </div>

        <div className="box-footer">
            <h3 className='footer-tag'>Find Us on the City Restaurants Service</h3>
            <div className="grid-colum">
                <img src={evil} alt="" />
                <img src={pixal} alt="" />
                <img src={pixal1} alt="" />
                <img src={pixal2} alt="" />
            </div>
        
        </div>



  
    </div>
    </Container>
{

}

</div>
  )
}

export default Footer
