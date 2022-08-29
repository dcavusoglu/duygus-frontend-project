import React from 'react'
import './Home.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchBox from '../../Components/SearchBox/SearchBox'
const Home = () => {
  return (
    <div className='home-container'>
      <div>
        <h2 className='home-welcome'>Best Shop</h2>
        <SearchBox/>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Home
