import React from 'react'
import Group1 from '../img/Group 1.png'
import Vector from '../img/Vector.png'
import  Vector1 from '../img/Vector (1).png'
import  Group from '../img/Group.png'
import './Menu.css'

function Menu() {
  return (
    <div className='menu'>


<div className="menu-flex">
    <h1 className='title' >Discover Our Culinary Delights</h1>

    <div className="flex-container d-flex justify-content-center align-ite  ms-center text-center   flex-wrap " style={{gap:"30px"}}>
        <div className='box'> 

        <div className="image-background">
            <img src={Vector} alt="" />
            </div>
      

            <p className='span-tag ' >Breakfast</p>
            <p >Our breakfasts are prepared with great care and are designed to start your day on a delicious note.</p>
            <span style={{color:"#AD343E"}}>View Menu</span>
   
        </div>


        <div className="box">
     
            <div className="image-background">
            <img src={Group1} alt="" />
                </div>    


            <p className='span-tag'>Main Dishes</p>
            <p className='paragraph'>Enjoy the richness of our main dishes, distinguished by culinary skills and exquisite tastes.</p>
            <span style={{color:"#AD343E"}}>View Menu</span>
        </div>
        <div className="box">
        <div className="image-background">
            <img src={Vector1} alt="" />
            </div>
            <p className='span-tag'>Fast Food</p>
            <p>Experience the perfect blend of convenience and flavor with our fast-food options. </p>
            <span style={{color:"#AD343E"}}>View Menu</span>
        </div>
        <div className="box">
        <div className="image-background">
            <img src={Group} alt="" />
            </div>
            <p className='span-tag'>Desserts</p>
            <p>End your culinary journey on a sweet note with our decadent desserts.</p>
            <span style={{color:"#AD343E"}}>View Menu</span>
        </div>
    </div>



      
</div>
    </div>
  )
}

export default Menu
