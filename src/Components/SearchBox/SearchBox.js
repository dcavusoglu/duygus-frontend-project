import React, { useState } from 'react'
import { Link } from "react-router-dom";
import GoBtn from '../Bottons/GoBtn'
import './SearchBox.css'



const SearchBox = ( {data} ) => {

  const [searchedInput, setSearchedInput] = useState([])

  const handleSearch = (e) => {
    const searchedItem = e.target.value.toLowerCase();
    const matchedItems = data.filter((product) => {
      return product.title.toLowerCase().includes(searchedItem);
    });
    (searchedItem === "") ? setSearchedInput("") : setSearchedInput(matchedItems);
  }

  return (
    <div>
      <div className='search-box'>
          <form>
            <label>Search</label>
            <div className='input-go'>
              <input type="text" id="site-search" name="q" onChange={handleSearch}/>
              <GoBtn/>
            </div>
          </form>
          { searchedInput.length !== 0 && (
            <div className='search-result'>
              {searchedInput.map(item =>
                <Link to={`/products/${item.id-1}`} target='_blank' className='search-item' key={item.id-1}>{item.title}</Link> )}
            </div>
          )}
          </div>
    </div>
  )
}

export default SearchBox
