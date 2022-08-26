import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
  return (
    <div>
      <form >
        <input type="text" value=""  placeholder="Title"/>
        <input type="number" value=""  placeholder="Price"/>
        <input type="number" value=""  placeholder="Discount"/>
        <input type="number" value=""  placeholder="Rating"/>
        <input type="text" value="" placeholder="Description"/>
        <input type="text" value=""  placeholder="Thumbnail"/>
        <input type="text" value=""  placeholder="Image1"/>
        <input type="text" value=""  placeholder="Image2"/>
        <input type="text" value=""  placeholder="Image3"/>

        <select >
          <option value="">Brand</option>
        </select>
        <select >
          <option value="">Type</option>
        </select>
        <input type="submit" value="Create"></input>
        <Link to={'/products'}>Cancel</Link>
      </form>
    </div>
  )
}

export default AddProduct
