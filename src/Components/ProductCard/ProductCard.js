import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Productcard.css'
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
    <div className='body-wrapper'>
      <div className='card-wrapper'>
      {allProducts.map(product => (

            <div className={(product.id-1 === 0) ? 'first-product-container' : 'product-wrapper'} key={product.id}>
              <div className={(product.id-1 === 0) ? 'first-img-cont' : 'image-wrapper'}>
                  <img src={product.thumbnail} alt="pic-img"  className={(product.id-1 === 0) ? 'first-img' : 'product-picture'}/>
              </div>
              <div className={(product.id-1 === 0) ? 'first-details-cont' : 'info-wrapper'}>
                <h1 className={(product.id-1 === 0) ? 'first-heading' : 'pro-title'}>{product.title}</h1>
                <p className={(product.id-1 === 0) ? 'first-details' : 'pro-description'}>{product.description}</p>
                <Link to={`/products/${product.id-1}`} className='product--link' >
                  <MoreBtn />
                </Link>
              </div>
            </div>


      ))
      }

      {/* {allProducts.map(product => (

            <div className='product-wrapper' key={product.id}>
              <div className='image-wrapper'>
                  <img src={product.thumbnail} alt="pic-img"  className='product-picture'/>
              </div>
              <div className='info-wrapper'>
                <h1 className='pro-title'>{product.title}</h1>
                <p className='pro-description'>{product.description}</p>
                <Link to={`/products/${product.id-1}`} className='product--link' >
                  <MoreBtn />
                </Link>
              </div>
            </div>
      ))
      } */}
          </div>
    </div>
  )
}

export default ProductCard
