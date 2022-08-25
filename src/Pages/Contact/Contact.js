import React from 'react'
import './Contact.css'
import SendBtn from '../../Components/Bottons/SendBtn'

const Contact = () => {
  return (
  <div className="contact-container">
    <form action="" className="info-container">

    <label >First Name</label>
    <input type="text" className="form-item" name="firstname" placeholder="Your name.."/>

    <label >Last Name</label>
    <input type="text" className="form-item" name="lastname" placeholder="Your last name.."/>

    <label >Title</label>
    <input type="text" className="form-item" name="subject" placeholder="Write the title.."/>

    <label >Message</label>
    <textarea className="form-item" name="message" placeholder="Write your message here.."/>

    <SendBtn/>

    </form>
  </div>
  )
}

export default Contact
