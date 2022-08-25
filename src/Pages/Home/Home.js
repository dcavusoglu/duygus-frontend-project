import React from 'react'
import './Home.css'
import FirstProduct from '../../Components/FirstProduct/FirstProduct'
import ProductCard from '../../Components/ProductCard/ProductCard'
const Home = () => {
  return (
    <div>
      Home
      <FirstProduct/>
      <div className='product-cont'>

      <ProductCard/>
      </div>
    </div>
  )
}

export default Home
