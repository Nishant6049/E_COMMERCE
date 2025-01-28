import React from 'react'
import './Shop.css'
const ShopCategory = (props) => {
  return (
    <div className='item p-4'>
    <img src={props.image} alt="" />
    <p className='title'>{props.name}</p>
    <div className="item-prices">
        <div className='font-bold'>$ {props.price}</div>
    </div>
    <button className='butt'>Add to Cart</button><br />
    <button className='butt'>Description</button>
    <p>{props.category.name}</p>
</div>
  )
}

export default ShopCategory