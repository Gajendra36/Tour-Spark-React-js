import "./ContactFormStyles.css";


import React from 'react'

const ContactForm = () => {


  return (
    <div className="from-container">
    
  
      <h1>Send a message to us!</h1>
      <form action="https://formspree.io/f/xgejpreg" method="POST">
        <input placeholder="Name" name="username" type="text" autoComplete="off" required />
        <input placeholder="Email"name="Email" type="email" autoComplete="off" required/>
        <input placeholder="Subject" name="Subject" type="text" autoComplete="off" required />
        <textarea placeholder="Message" name="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
