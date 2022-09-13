import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios'
// import fetchProducts from '../../Api.js'


import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchBox from '../../Components/SearchBox/SearchBox'



const Home = () => {

  const [allProducts, setAllProducts] = useState([]);

  useEffect (() => {
    const endPoint = 'https://dummyjson.com/products'
      axios.get(endPoint)
        .then((res) => {
          const allProducts = res.data.products
          console.log('All:', res.data.products.map(product => product.images.map(img =>img)))
          setAllProducts(allProducts)
        })
        .catch(err => console.log(`Error: ${err}`))

  }, [])


  return (
    <div className='home-container'>
      <div>
        <h2 className='home-welcome'>Best Shop</h2>
        <SearchBox data={allProducts}/>
        <div>
          {/* {searchResults.length === 0 ? <ProductCard/> : } */}
        </div>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Home
