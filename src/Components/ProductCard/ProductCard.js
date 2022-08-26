import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './ProductCard.css'
import MoreBtn from "../Bottons/MoreBtn";


const ProductCard = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect (() => {
    const endPoint = 'https://dummyjson.com/products'
      axios.get(endPoint)
        .then((res) => {
          const allProducts = res.data.products
          console.log('All:', res.data.products.map(product => product.images.map(img =>img)))
          setAllProducts(allProducts)
        })
        .catch(err => console.log(`Error: ${err}`))

  }, [])

  return (
    <div className='product-card'>
      {allProducts.map(product => (
      <Link to={`/products/${product.id}`} className='product-link' key={product.id}>
        <div className='product-img-cont'>
            <img src={product.thumbnail} alt="pic-img" />
        </div>
        <div className='product-info'>
          <h1 className='product-name'>{product.title}</h1>
          <p className='product-detail'>{product.description}</p>
          <MoreBtn />
{/*
          {
            allProducts.map(product =>  { return product.images.map(imgage => <img src={imgage.toString()} alt='imggg'/>)})
          } */}
        </div>
        </Link>
      ))
      }
    </div>
  )
}

export default ProductCard
