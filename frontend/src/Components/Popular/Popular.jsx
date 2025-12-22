import React from 'react'
import './Popular.css'
import { products } from '../Assets/productData'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="popular-title">POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {products.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
