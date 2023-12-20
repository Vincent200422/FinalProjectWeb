import React from "react";
import HealthyImages from "../img/img.png";
import "./index.css";

import SidebySide from "../components/Two Images Side by side/SidebySide";

function HealthyFood() {
  return (

<SidebySide 
title="Feed your
loved ones."
subTitle="loved ones"
paragraphOne="Our journey began with the idea of creating an unsurpassed restaurant that organically combines fine cuisine, unsurpassed hospitality and a lively atmosphere. Deeply rooted in our city's diverse culinary heritage, we strive to pay homage to our local root while embracing the global culinary spectrum."
paragraphTwo="In our establishment, we adhere to the belief that dinner goes beyond simple meals; it is a holistic experience. Our team, known for its hospitality and dedication, strives to turn every visit into an unforgettable moment."
images={HealthyImages}


titleBtn="Discover Our Story"



/>
  );
}

export default HealthyFood;
