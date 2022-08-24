import React from 'react'
import './Buttons.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
const AddProductBtn = () => {
  return (
    <div>
      <button className='add-btn'>Add to Cart <FontAwesomeIcon icon={faCirclePlus} className='plus-sign'/></button>
    </div>
  )
}

export default AddProductBtn
