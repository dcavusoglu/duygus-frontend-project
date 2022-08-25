import React, { useEffect, useState } from 'react'
import './FirstProduct.css'
import MoreBtn from '../Bottons/MoreBtn'
import axios from 'axios'


const FirstProduct = () => {
  const [firstProduct, setFirstProduct] = useState("");

  useEffect (() => {
    const endPoint = 'https://dummyjson.com/products'
      axios.get(endPoint)
        .then((res) => {
          const firstProduct = res.data.products[0]
          console.log(firstProduct)
          setFirstProduct(firstProduct)
        })
        .catch(err => console.log(`Error: ${err}`))

  }, [])

  return (
    <div className='first-product-container'>
      <div className='first-img-cont'>
        <img  className='first-img' src={firstProduct.thumbnail} alt='img-name'></img>
      </div>
      <div className='first-details-cont'>
        <h1 className='first-heading'>{firstProduct.title}</h1>
        <p className='first-details'>{firstProduct.description}</p>
        <span>
          <MoreBtn/>
        </span>
      </div>
    </div>
  )
}

export default FirstProduct
