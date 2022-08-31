import './EditProduct.css'
import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'



const initialState = {
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


const EditProduct = () => {
  const {id} = useParams()
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState(initialState);

  console.log('id',id)


  const products = JSON.parse(localStorage.getItem('products'));
  useEffect (() => {
    if(products) {
      try {
      // Do something that could throw
      const productToEdit = products.find(product => product.id === id);
      console.log(productToEdit);
      setEditForm(productToEdit);
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  console.log('editform', editForm)




    // console.log(editForm);

    const handleInput = (event) => {
    const { name, value } = event.target;

    setEditForm({ ...editForm, [name]: value });
  };


  const handleUrlInput = (event) => {
    const newImages = editForm.images.push(event.target.value)
    setEditForm({ ...editForm, newImages });
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Event', event)
    try {
      setEditForm(editForm)

      var oldItems = JSON.parse(localStorage.getItem('products')) || [];

          oldItems.push(editForm)
      localStorage.setItem('products', JSON.stringify(oldItems));
    } catch (error) {
      console.log('handleSubmit error', error)
    }
    navigate('/services')
};





  return (
    <div className='edit-wrapper'>
      <div>
        <h2>Edit Product</h2>
        <form onSubmit={handleSubmit} className="edit-product-form" >
        <h3><strong>EDIT PRODUCT</strong></h3>
        <label >Choose an brand:</label>
        <select name="brand" value={editForm.brand} onChange={handleInput}>
          <option value="Apple">Apple</option>
          <option value="OPPO">OPPO</option>
          <option value="Huawei">Huawei</option>
          <option value="Infinity">Infinity</option>
          <option value="Microsoft Services">Microsoft Services</option>
        </select>
        <label >Choose an category:</label>
        <select name="category" value={editForm.category} onChange={handleInput}>
          <option value="smartphone">smartphone</option>
          <option value="watch">watch</option>
          <option value="Airpods">Airpods</option>
          <option value="Headphones">Headphones</option>
          <option value="cables">cables</option>
        </select>
        <br />
        <label>Product Name:</label>
        <input
          type="text"
          name="title"
          value={editForm.title}
          onChange={handleInput}
          className="form-input"
        />
        <br/>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={editForm.price}
          onChange={handleInput}
          className="form-input"
        />
        <br />
        <label>Discount:</label>
        <input
          type="number"
          name="discountPercentage"
          value={editForm.discountPercentage}
          onChange={handleInput}
          className="form-input"
        />
        <br />
        <label>Stock:</label>
        <input
          type="number"
          name="stock"
          value={editForm.stock}
          onChange={handleInput}
          className="form-input"
        />
        <br />
        <label>Rating:</label>
        <input
        type="number"
          name="rating"
          value={editForm.rating}
          onChange={handleInput}
          className="form-input"
          />
        <br />
        <label>Thumbnail:</label>
        <input
        type="text"
        name="thumbnail"
        value={editForm.thumbnail}
        onChange={handleInput}
        className="form-input"
        />
        <br />

        {(editForm.images) ?
        <div>
          <label>Image 1:</label>
          <input
          type="text"
          name="imageUrl1"
          value={editForm.images[0]}
          onChange={handleUrlInput}
          className="form-input"
          />
          <br />
          <label>Image 2:</label>
          <input
          type="text"
          name="imageUrl2"
          value={editForm.images[1]}
          onChange={handleUrlInput}
          className="form-input"
          />
          <br />
          <label>Image 3:</label>
          <input
          type="text"
          name="imageUrl3"
          value={editForm.images[2]}
          onChange={handleUrlInput}
          className="form-input"
          />
        </div>

        :
        <div>
          <label>Image 1:</label>
          <input
          type="text"
          name="imageUrl1"
          value=""
          onChange={handleUrlInput}
          className="form-input"
          />
          <br />
          <label>Image 2:</label>
          <input
          type="text"
          name="imageUrl2"
          value=""
          onChange={handleUrlInput}
          className="form-input"
          />
          <br />
          <label>Image 3:</label>
          <input
          type="text"
          name="imageUrl3"
          value=""
          onChange={handleUrlInput}
          className="form-input"
          />
        </div>
      }
        <br />

          <button type="submit">Edit</button>

      </form>
      <div>
        <Link to={'/services'} className="back-btn">Back</Link>
      </div>
      </div>
    </div>
  )
}

export default EditProduct
