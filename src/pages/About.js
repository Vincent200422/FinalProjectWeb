import React from 'react'
import SidebySide from '../components/Two Images Side by side/SidebySide'
import AboutImg from '../img/Aboutimg.png'
function About() {
  return (

    <div className="sam">

    <SidebySide 
    title="Feed your families with healthy cuisine"
    paragraphOne="Embark on a culinary journey with the Almaty Restaurant, where we are proud to offer healthy and delicious dishes for your family. Our journey began with the desire to create a restaurant that organically combines fine cuisine, exceptional service and a lively atmosphere. Rooted in the French culinary culture of our city, we strive to celebrate local traditions while using a global palette."
    paragraphTwo="At Almaty Restaurant, we believe that dinner goes beyond simple meals; it's an exciting experience. Our dedicated staff, known for their warmth and dedication, strives to make every visit an unforgettable experience."
    images={AboutImg}
    titleBtn=""
    />
    
    </div>
  )
}

export default About
