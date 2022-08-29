import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoBtn from '../Bottons/GoBtn'
import './SearchBox.css'
const SearchBox = () => {


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

    const handleSearch = (e) => {
    let input = e.target.value
    input=input.toLowerCase();
    let x = allProducts.map(product => product.title.toLowerCase());
    console.log(x)
    if(x.includes(input)) {
      console.log(input)
      const searchedItem = input
    }
    e.preventDefault();

    //
}



  return (
    <div>
      <div className='search-box'>
            <label>Search</label>
            <div className='input-go'>
              <input type="text" id="site-search" name="q" onChange={handleSearch}/>
              <GoBtn/>
            </div>
          </div>
    </div>
  )
}

export default SearchBox
