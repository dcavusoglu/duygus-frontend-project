import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../Components/Product/Product'
import './SingleProduct.css'
const SingleProduct = () => {
  return (
    <div>
      <Product/>
      <br/>
      <br/>
      <Link to={'/'} className="back-btn">Back</Link>
    </div>
  )
}

export default SingleProduct
