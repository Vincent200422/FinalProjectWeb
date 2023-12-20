import React from 'react'
import SidebySide from '../components/Two Images Side by side/SidebySide'
import DescriptionImg from '../img/description.png'
function Description() {
  return (

    <div className="sam">

    <SidebySide 
    title="Discover Culinary Bliss at Almaty Restaurant – Where Every Bite Tells a Story"
    paragraphOne="Welcome to Almaty Restaurant, a culinary haven where exquisite flavors, impeccable service, and a warm ambiance converge to create unforgettable dining experiences. Immerse yourself in the rich tapestry of our menu, carefully curated to reflect the vibrant culinary culture of Almaty. From savoring the finest steaks to indulging in delectable desserts, each dish is a masterpiece, prepared with passion and precision"
    images={DescriptionImg}
    titleBtn=""
    />
    
    </div>
  )
}

export default Description
