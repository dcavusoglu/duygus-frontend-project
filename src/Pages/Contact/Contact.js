import React from 'react'
import './Contact.css'
import SendBtn from '../../Components/Bottons/SendBtn'

const Contact = () => {
  return (
  <div className="contact-container">
    <form action="" className="info-container">

    <label for="fname">First Name</label>
    <input type="text" className="form-item" name="firstname" placeholder="Your name.."/>

    <label for="lname">Last Name</label>
    <input type="text" className="form-item" name="lastname" placeholder="Your last name.."/>

    <label for="subject">Title</label>
    <input type="text" className="form-item" name="subject" placeholder="Write the title.."/>

    <label for="subject">Message</label>
    <textarea className="form-item" name="message" placeholder="Write your message here.."/>

    <SendBtn/>

    </form>
  </div>
  )
}

export default Contact
