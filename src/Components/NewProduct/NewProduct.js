import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import './NewProduct.css'


const NewProduct = () => {
  const [allProducts, setAllProducts] = useState([]);


  useEffect (() => {

    const products = localStorage.getItem('products')
    if(products) {
      console.log('Tüm ürünler',JSON.parse(products))
      setAllProducts(JSON.parse(products))
    }


  }, [])



  const handleDelete = (e) => {
    //     const filtered = products.filter(product => e.product.id === id);
    //     console.log('F', filtered)


    //     localStorage.setItem('products', JSON.stringify(filtered))
    const pro = e.target.value
    const products = JSON.parse(localStorage.getItem('products'));
    if(products) {

    const filtered = products.filter(product => product.id == pro);
    localStorage.setItem('products', JSON.stringify(filtered));
    setAllProducts(filtered);
  }
  //   }
    // axios.delete(`https://6309ec1332499100327db682.mockapi.io/product/${id}`)
    //   .then(res => {
      //     console.log(res);
      //     console.log(res.data);
      //   })

    }


  return (
    <div className='body-wrapper'>
      <div className='card-wrapper'>
        {(allProducts) ? allProducts.map(product => (

          <div key={product.description} className='product-wrapper'>

            <div className='imgage-wrapper'>
                <img src={product.thumbnail} alt="pic-img" className='product-picture'/>
            </div>

            <div className='info-wrapper'>
              <h1 className='pro-title'>{product.title}</h1>
              <p className='pro-description'>{product.description}</p>
              <Link to={`/products/edit/${product.id}`}>
                <button type="button" className='btn'>Edit</button>
              </Link>
              <Link to='/services'>
                <button type="button" className='btn' onClick={handleDelete} value={product.id}>Delete</button>
              </Link>
            </div>

          </div>
        )) : <div> <p>Yeni ürün eklenmedi</p> </div>
        }
      </div>
    </div>
  )
}

export default NewProduct
