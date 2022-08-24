import React from 'react'
import './Product.css'
import GoBtn from '../Bottons/GoBtn'


// axios ile datayı çekip bunun içinde aşağıdaki şeyleri mapplicem.

const Product = () => {
  return (
    <div className='product-container'>
      <div className='left-column'>
        <h1 className='product-title'>Product Heading</h1>
        <div className='product-thumbnail'>
          <img src="https://dummyjson.com/image/i/products/1/thumbnail.jpg" alt="img-thumbnail" />
        </div>
        <p className='product-description'>Implementing stack with its manipulation methods — Stack Data Structure Stack is
          a linear data structure, which means its elements are connected in a sequential order
          and each element connected to the element in front
        </p>
      </div>

      <div className='right-column'>
        <div className='search-box'>
          <label for="search">Search</label>
          <input type="search" id="site-search" name="q"/>
          <GoBtn/>
        </div>
        <div className='product-tags'>Tags
          <span className='product-brand'>Brand</span>
          <span className='product-category'>Category</span>
        </div>
        <div className='product-images'>

        </div>
        <div className='product-info'>
          <span className='products-price'>Price</span>
          <span className='product-discount'>Discount:</span>
          <span className='product-stock'>Stock</span>
          <span className='product-rating'>Rating</span>
        </div>
      </div>
    </div>
  )
}

export default Product
