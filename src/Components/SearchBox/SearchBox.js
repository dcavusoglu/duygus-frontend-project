import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoBtn from '../Bottons/GoBtn'
import './SearchBox.css'

const initialState = { userInput: ""};

const SearchBox = ( {addSearchInput} ) => {

  const [searchInput, setSearchInput] = useState(initialState)
  const [searchedProducts, setSearchedProducts] = useState([])

  const handleSearch = (e) => {
    //input
    let input = (e.target.value).toLowerCase();
    console.log('input', input)
    setSearchInput(input);
    console.log(searchInput)

    axios.get(`https://dummyjson.com/products/search?q=${searchInput}`)
    .then((res) => {
      const searchedItem = res.data.products;
      console.log(searchedItem)
      setSearchedProducts(searchedItem);
      console.log()
      })
        .catch(err => console.log(`Error: ${err}`))


    // let input = e.target.value
    // input=input.toLowerCase();
    // let x = allProducts.map(product => product.title.toLowerCase());
    // console.log(x)
    // if(x.includes(input)) {
    //   console.log(input)
    //   const searchedItem = input
    // }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addSearchInput(searchInput);
    setSearchInput(initialState);

  }
  console.log(searchedProducts)


  return (
    <div>
      <div className='search-box'>
          <form onSubmit={handleSubmit}>
            <label>Search</label>
            <div className='input-go'>
              <input type="text" id="site-search" name="q" onChange={handleSearch}/>
              <GoBtn/>
            </div>
          </form>
          </div>
    </div>
  )
}

export default SearchBox
