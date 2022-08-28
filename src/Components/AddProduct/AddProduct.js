import React, { useState } from 'react'
import axios from 'axios'
import './AddProduct.css'
var initialState = {
  id:"",
  title: "",
  price: "",
  discountPercentage: "",
  brand:"",
  category:"",
  stock: "",
  rating: "",
  description:"",
  thumbnail:"",
  images: [],
}

const AddProduct = () => {
const [addForm, setAddForm] = useState(initialState);
// const [newProducts, setNewProducts] = useState([]);

  const handleInput = (event) => {
  const { name, value } = event.target;
  setAddForm({ ...addForm, [name]: value });
  };

  const handleUrlInput = (event) => {
    addForm.images.push(event.target.value)
  }

  console.log(addForm);

  const handleSubmit = (event) => {
  event.preventDefault();

  var { id, title, price, discountPercentage, brand, stock, category, rating, description, thumbnail, images } = addForm;

  // Make api call to the backend to save form data
  axios
    .post(
      "https://dummyjson.com/products/add",
      { id, title, price, discountPercentage, brand, stock, category, rating, description, thumbnail, images },
    )
    .then(() => {
      setAddForm(initialState);

      var oldItems = JSON.parse(localStorage.getItem('products')) || [];
      oldItems.push(addForm);

      localStorage.setItem('products', JSON.stringify(oldItems));

    })
    .catch((error) => console.error(error));

    // Localde cıkan ürün listeleniyor mu? Evet

    // ürünleri çek ekrana göster evet

    // first product için card yapıp class name ata

    // editleri dene

    // delete

    // reset() diye bişey vardı ona bak



  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="add-product-form" >
        <h3 className='page-title'><strong>ADD A NEW PRODUCT</strong></h3>
        <input type='number' value={addForm.id} name='id' onChange={e => {parseInt(e.value)}}/>
        <label >Choose an brand:</label>
        <select name="brand" value={addForm.brand} onChange={handleInput} className="add-form-item">
          <option value="Select">Select</option>
          <option value="Apple">Apple</option>
          <option value="OPPO">OPPO</option>
          <option value="Huawei">Huawei</option>
          <option value="Infinity">Infinity</option>
          <option value="Microsoft Services">Microsoft Services</option>
        </select>
        <label >Choose an category:</label>
        <select name="category" value={addForm.category} onChange={handleInput} className="add-form-item">
          <option value="select">Select</option>
          <option value="smartphone">smartphone</option>
          <option value="watch">watch</option>
          <option value="Airpods">Airpods</option>
          <option value="Headphones">Headphones</option>
          <option value="cables">cables</option>
        </select>
        <br />
<div className='form-wrapper'>
  <div className='form-part'>
    <div className='add-form-item'>
      <label>Product Name:</label>
      <input
        type="text"
        name="title"
        value={addForm.title}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={addForm.description}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={addForm.price}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Discount:</label>
      <input
        type="number"
        name="discountPercentage"
        value={addForm.discountPercentage}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Stock:</label>
      <input
        type="number"
        name="stock"
        value={addForm.stock}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Rating:</label>
      <input
      type="number"
        name="rating"
        value={addForm.rating}
        onChange={handleInput}
        className="form-input input-align"
      />
    </div>
  </div>

  <div className='form-part'>
    <div className='add-form-item'>
      <label>Thumbnail:</label>
      <input
      type="text"
      name="thumbnail"
      value={addForm.thumbnail}
      onChange={handleInput}
      className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Image 1:</label>
      <input
      type="text"
      name="imageUrl1"
      value={addForm.images.imageUrl1}
      onChange={handleUrlInput}
      className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Image 2:</label>
      <input
      type="text"
      name="imageUrl2"
      value={addForm.images.imageUrl2}
      onChange={handleUrlInput}
      className="form-input input-align"
      />
    </div>
    <div className='add-form-item'>
      <label>Image 3:</label>
      <input
      type="text"
      name="imageUrl3"
      value={addForm.images.imageUrl3}
      onChange={handleUrlInput}
      className="form-input input-align"
      />
    </div>
  </div>

</div>


    <button type="submit" className='add-btn' >Submit</button>


      </form>
    </div>
  )
}

export default AddProduct
