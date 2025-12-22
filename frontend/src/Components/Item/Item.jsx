// src/Components/Item/Item.jsx

import React from 'react'
import './Item.css'

const Item = ({ id, name, image, new_price, old_price }) => {
  return (
    <div className="item">
      <img src={image} alt={name} />
      <p>{name}</p>
      <div className="item-prices">
        <span className="new-price">${new_price}</span>
        <span className="old-price">${old_price}</span>
      </div>
    </div>
  )
}

export default Item
