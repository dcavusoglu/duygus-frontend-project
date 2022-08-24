import React from 'react'
import './FirstProduct.css'
import MoreBtn from '../Bottons/MoreBtn'
const FirstProduct = () => {
  return (
    <div className='first-product-container'>
      <div className='first-img-cont'>
        <img  classname='first-img' src='https://picsum.photos/seed/picsum/600/400' alt='img-name'></img>
      </div>
      <div className='first-details-cont'>
        <h1 className='first-heading'>Heading</h1>
        <p className='first-details'>
          Details Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
          an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <span>
          <MoreBtn/>
        </span>
      </div>
    </div>
  )
}

export default FirstProduct
