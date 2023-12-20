import React from 'react'
import SidebySide from "../components/Two Images Side by side/SidebySide";
import FastFoodIMG from'../img/FastFoodimg.png'
import CartIcon from '../img/CartIcon.png'
import CartIcon1 from '../img/Carticon1.png'
import CartIcon3 from '../img/Carticon3.png'
import './FastFood.css'
function FastFood() {

    const customContent = (
        <div className="">
            <div className="   imagesNow d-flex gap-3">
                <img className='iconimages' src={CartIcon} alt="CartIcon" />
                <p>Express Delivery in 30 Minutes</p>
            </div>
    
            <div className="imagesNow d-flex  gap-3">
                <img className='iconimages' src={CartIcon1} alt="CartIcon1" />
                <p>Exclusive Offers & Competitive Prices</p>
            </div>
            <div className="imagesNow d-flex  gap-3">
                <img  className='iconimages' src={CartIcon3} alt="CartIcon3" />
                <p>Convenient Online Services</p>
            </div>
        </div>
    )



  return (
   
<SidebySide 
  title="Swift Food Delivery in the City"
paragraphOne="Enjoy the advantage of our express delivery service, where every dish from our menu is delivered promptly, allowing you to relish the goodness of our cuisine without any delay.
"
customDiv={customContent}
images={FastFoodIMG }




/>


  )
}

export default FastFood
