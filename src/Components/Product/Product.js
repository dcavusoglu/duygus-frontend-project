import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import noimage from '../../assets/no-image.jpg'
import axios from 'axios'
import './Product.css'
import GoBtn from '../Bottons/GoBtn'


// axios ile datayı çekip bunun içinde aşağıdaki şeyleri mapplicem.

const Product = () => {
  const {id} = useParams()
  const [product, setProduct] = useState("");
  useEffect (() => {
    const endPoint = 'https://dummyjson.com/products'
    axios.get(endPoint)
    .then((res) => {
      const product = res.data.products[id]
      // console.log('Products:', product)
      // console.log(product.images[0])
      setProduct(product)
    })
    .catch(err => console.log(`Error: ${err}`))

  }, [])

  // const imgUrl = product.images.map(image => image.toString())
  return (
    <div className='page-wrapper'>
      <div className='product-container'>
        <div className='left-column'>
          <h1 className='product-title'>{product.title}</h1>
          <div className='product-thumbnail'>
            <img src={product.thumbnail} alt="img-thumbnail" />
          </div>
          <p className='product-description'>{product.description}</p>
        </div>

        <div className='right-column'>
          <div className='search-box'>
            <label>Search</label>
            <div className='input-go'>
              <input type="search" id="site-search" name="q"/>
              <GoBtn/>
            </div>
          </div>
          <div className='product-tags'>
            <h2>Tags</h2>
            <span className='product-brand'>Brand: {product.brand} </span> <br/>
            <span className='product-category'>Category: {product.category}</span>
          </div>

          <div className='product-images'>
            {(product.images && product.images.length >= 1) ?
              product.images.map(pic => {
                return <img className='image-item' src={pic} key={pic} alt={product.title}/>
              }) : <img className='image-item' src={noimage} key={product.title} alt={product.title}/>
            }
          </div>
          <div className='product-info'>
            <span className='products-price'>Price:</span>
            <span className='product-discount'>Discount:</span>
            <span className='product-stock'>Stock:</span>
            <span className='product-rating'>Rating:</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
