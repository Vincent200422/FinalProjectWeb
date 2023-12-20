import React, { useState } from 'react'

import './index.css'
import { menu } from '../datat'
import OurMenuDisplay from './OutMenuDisplay'
import Category from './Category'

const newCategory = ["all" , ...new Set(menu.map((m)=>m.category))]

function OurMenu() {


  const [menuItems,setMenuItems] = useState(menu)
  const [category,setCategory] = useState(newCategory)

  const filterItem =(type,value)=>{
    if(value === "all"){
      setMenuItems(menu)
      return; 
    }

    const newfilter = menu.filter((item)=> item[type] === value)

 



    setMenuItems(newfilter)


  }




  return (
    <section className='menu section'>
    <div className='title'>
 
     <div className='underline'></div>
   </div>
<div>


<Category filterItems={filterItem} category={category}/>
<OurMenuDisplay menuItems={menuItems} />


</div>

   </section>
  )
}

export default OurMenu
