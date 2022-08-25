import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import './Services.css'
import axios from 'axios'
import SendBtn from '../../Components/Bottons/SendBtn'
import MoreBtn from '../../Components/Bottons/MoreBtn'



const Services = () => {
  const [data, setData] = useState(
    {title: "",
    id:"",
    price: "",
    discount: "",
    brand:"",
    category:"",
    stock: "",
    rating: "",
    description:"",
    thumbnail:"",
    images: [],
    })



// const [allBrands, setAllBrands] = useState([]);
// const [allCategories, setAllCategories] = useState([]);

//   useEffect (() => {
//     const endPoint = 'https://dummyjson.com/products'
//       axios.get(endPoint)
//         .then((res) => {
//           const productBrand = res.data.products.map(product => product.brand.toLowerCase())

//           const brands = [...new Set(productBrand)]
//           setAllBrands(brands.map(brand => brand.toUpperCase()));

//           const productCategory = res.data.products.map(product => product.category)
//           const categories = [...new Set(productCategory)]
//           setAllCategories(categories);

//         })
//         .catch(err => console.log(`Error: ${err}`))

//   }, [])



  const endPoint = 'https://dummyjson.com/products'

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('data', data );


    axios.post(endPoint, formData)
          .then((res) => {
            alert('Product Added Successfully');
          })
          .catch((err) => alert('Something went wrong!'));
  }


  const handleImageUrls = (e) => {
    data.images.push(e.target.value)
  }

  const handleData = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData);
  }


  return (
    <div >
      <form className='upload-form'>
        <label >Title</label>
        <input type="text" value={data.title} id='title' onChange={(e) => handleData(e)}/>

        <label >Brand</label>
        <input type="text" value={data.brand} id='brand' onChange={(e) => handleData(e)}/>

        <label >Category</label>
        <input type="text" value={data.category} id='category' onChange={(e) => handleData(e)}/>

        <label >Description</label>
        <input type="text" value={data.description} id='description' onChange={(e) => handleData(e)}/>

        {/* <label>Choose brand name:</label>
        <select name="brand" id="brand" onChange={(e) => handleData(e)} value={data.brand}>
          {allBrands.map(brand => <option value={data.brand} onChange={(e) => handleData(e)} key={brand}>{brand}</option>)}
        </select> */}
{/*
        <label>Choose a category:</label>
        <select name="category" id="category">
          {allCategories.map(cat => <option value={data.category} key={cat}>{cat}</option>)}
        </select> */}

        <label >Price</label>
        <input type="text" value={data.price} id='price' onChange={(e) => handleData(e)}/>
        <label >Discount Percentage</label>
        <input type="text" value={data.discount} id='discount' onChange={(e) => handleData(e)}/>
        <label >Stock</label>
        <input type="text" value={data.stock} id='stock' onChange={(e) => handleData(e)}/>
        <label >Rating</label>
        <input type="text" value={data.rating} id='rating' onChange={(e) => handleData(e)}/>


        <label >Thumbnail Url</label>
        <input type="text" id='thumbnail' value={data.thumbnail} onChange={(e) => handleData(e)}/>
        <label >Product Picture Url</label>
        <input type="text" id='image1' value={data.images.image1} onChange={(e) => handleImageUrls(e)}/>
        <label >Product Picture  Url</label>
        <input type="text" id='image2' value={data.images.image2} onChange={(e) => handleImageUrls(e)}/>
        <label >Product Picture  Url</label>
        <input type="text" id='image3' value={data.images.image3} onChange={(e) => handleImageUrls(e)}/>




        {/* <Link to={`/products/${data.id}`}> */}
          <SendBtn onClick={submitForm}/>
        {/* </Link> */}

      </form>

        {/* {(data && data.length >= 1) ? */}
          <div className='newProducts'>
            <div className='product-img-cont'>
                <img src={data.thumbnail} alt="pic-img" />
            </div>
            <div className='product-info'>
              <h1 className='product-name'>{data.title}</h1>
              <p className='product-detail'>{data.description}</p>
              <MoreBtn />
            </div>
          </div>
          {/* : ""
      } */}


  </div>
  )
}

export default Services
