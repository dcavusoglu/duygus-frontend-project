import React from 'react'
import GoBtn from '../Bottons/GoBtn'
import './SearchBox.css'
const SearchBox = () => {
  return (
    <div>
      <div className='search-box'>
            <label>Search</label>
            <div className='input-go'>
              <input type="search" id="site-search" name="q"/>
              <GoBtn/>
            </div>
          </div>
    </div>
  )
}

export default SearchBox
