import React from 'react'
import './ProductCard.css'
import MoreBtn from "../Bottons/MoreBtn";

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className='product-img-cont'>
          <img src="https://picsum.photos/200/300" alt="pic-img" />
      </div>
      <div className='product-info'>
        <h1 className='product-name'>Product name</h1>
        <p className='product-detail'>Implementing stack with its manipulation methods — Stack Data Structure Stack is a linear data structure, which means its elements are connected in a sequential order and each element connected to the element in front </p>
        
        <MoreBtn />
      </div>
    </div>
  )
}

export default ProductCard
