import React from 'react'

function OutMenuDisplay({menuItems}) {
    return (
        <div className='section-bottom'>
            {menuItems.map((item)=>{
               const {img, title, id, category, price, desc,newPrice}= item
    
                return (
                    <div key={id} className='menu-item'>
                    <img src={img} className='photo'/>
                    <div className='item-info'>
                      <header>
                        <h4>{title}</h4>
                        <h4 className='price'>{price}</h4>
                      </header>
                      <p className='item-text'>{desc}</p>
                      <p className='item-text'>{newPrice}</p>
                    </div>
                    
                  </div>
    
                )
            })}
    
        </div>
      )
}

export default OutMenuDisplay
