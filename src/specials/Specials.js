import React from 'react'
import SidebySide from '../components/Two Images Side by side/SidebySide'
import SpecialImg from '../img/special.png'
function Special() {
  return (

    <div className="sam">

    <SidebySide 
    title="Indulge in Culinary Excellence with Our Specials"
    paragraphOne="In our culinary adventure with our signature dishes at the Almaty restaurant. Each dish is a feast of flavors, prepared with precision and innovation to delight your taste buds. From seasonal delicacies to the chef's signature creations, our signature menu is a testament to our commitment to providing an unforgettable dining experience."
    paragraphTwo="Savor the Season: Immerse yourself in the essence of the season with our specially curated seasonal specials. Our chefs source the finest ingredients to bring you dishes that capture the freshness and vibrancy of each season."
    images={SpecialImg}
    titleBtn=""
    />

    </div>
  )
}

export default Special
