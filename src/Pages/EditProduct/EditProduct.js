import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'



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
  const [editForm, setEditForm] = useState(initialState);

  console.log('id',id)

  useEffect (() => {
    // const apiEndPoint = `https://dummyjson.com/products/${id}`
    //   axios.get(apiEndPoint)
    //     .then((res) => {
    //       const editForm = res.data;
    //       console.log(res.data)
    //       setEditForm(editForm)
    //     })
    //     .catch(err => console.log(`Error: ${err}`))

    // Here fetch the products from LS
     const products = JSON.parse(localStorage.getItem('products'))

     if(products.length >= 1) {
       console.log('products', products.map(product => JSON.stringify(product)));
       console.log('products', products.map(product => product.id == id))
       const singleProduct = products.map(product => {
        if(product.id == id) {
          return product;
        }
        console.log('p:', product);
        });
        setEditForm(singleProduct)
     }
    //  if(products) {
    //Find the specific indexed product
      // const singleProduct = products[id]
      // console.log('Product id', singleProduct)



    // }

  }, [])


  const handleInput = (event) => {
  const { name, value } = event.target;
   let inputType = event.target.type;
   if(inputType === 'number') {
    parseInt(inputType)
   }
  setEditForm({ ...editForm, [name]: value });
  };

  const handleUrlInput = (event) => {
    editForm.images.push(event.target.value)
  }


  // console.log(editForm);

  const handleSubmit = (event) => {
  event.preventDefault();
  const { title, price, discountPercentage, brand, stock, category, rating, description, thumbnail, images } = editForm;

  fetch(`https://dummyjson.com/products/${id}`, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title, price, discountPercentage, brand, stock, category, rating, description, thumbnail, images

  })
})
.then(res => setEditForm(res))
.then(console.log);



};
// useEffect(() => {


    // axios
    //   .put(
    //     `https://6309ec1332499100327db682.mockapi.io/product/${id}`,
    //   ).then(() => {
    //   })

  // }, [])




  return (
    <div>
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
        <Link to='/services'>
          <button type="submit" onClick={() => (setEditForm(initialState))}>Edit</button>
        </Link>
      </form>
      </div>
      <div>
        <img src='' alt=''/>
      </div>
    </div>
  )
}

export default EditProduct
