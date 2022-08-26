import React from 'react'
import { Link } from 'react-router-dom'

const EditProduct = () => {
  return (
    <div>
      <div>
        <h2>Edit Product</h2>
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
          <input type="submit" value="Edit"></input>
          <Link to={'/services'}>Cancel</Link>
        </form>
      </div>
      <div>
        <img src='' alt=''/>
      </div>
    </div>
  )
}

export default EditProduct
