import React from 'react'
import { Link } from 'react-router-dom'
import Product from '../../Components/Product/Product'
const SingleProduct = () => {
  return (
    <div>
      <Product/>
      <Link to={'/'}>Back</Link>
    </div>
  )
}

export default SingleProduct
