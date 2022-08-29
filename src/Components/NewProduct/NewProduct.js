import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import './NewProduct.css'

const initialState = []

const NewProduct = () => {
  const [allProducts, setAllProducts] = useState(initialState);


  useEffect (() => {

    const products = localStorage.getItem('products')
    if(products) {
      console.log('Tüm ürünler',JSON.parse(products))
      setAllProducts(JSON.parse(products))
    }


  }, [])



  const handleDelete = (e) => {
    e.preventDefault();
    //     localStorage.setItem('products', JSON.stringify(filtered))
    const pro = e.target.value
    const products = JSON.parse(localStorage.getItem('products'));
    if(products && products.length>= 1) {

      const filtered = products.filter(product => product.id !== pro);
      localStorage.setItem('products', JSON.stringify(filtered));
      setAllProducts(filtered);
    }
  }


  return (
    <div className='body-wrapper'>
      <div className='card-wrapper'>
        {(allProducts) ? allProducts.map(product => (

          <div key={product.id} className='product-wrapper'>

            <div className='imgage-wrapper'>
                <img src={product.thumbnail} alt="pic-img" className='product-picture'/>
            </div>

            <div className='info-wrapper'>
              <h1 className='pro-title'>{product.title}</h1>
              <p className='pro-description'>{product.description}</p>
              <div className='btn-wrapper'>
                <Link to={`/products/edit/${product.id}`}>
                  <button type="button" className='go-btn'>Edit</button>
                </Link>
                <Link to='/services'>
                  <button type="button" className='go-btn delete-btn' onClick={handleDelete} value={product.id}>Delete</button>
                </Link>
              </div>
            </div>
          </div>
        )) : <div> <p>Yeni ürün eklenmedi</p> </div>
        }
      </div>
    </div>
  )
}

export default NewProduct
