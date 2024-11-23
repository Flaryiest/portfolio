import React, { useState } from 'react';
import '../style/contact.css';
const ContactPage = () => {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { message });
    setMessage('');
    await sendMessage()
  }
  
  async function sendMessage() {
    const response = await fetch("https://swag.up.railway.app/"+ "feedback/submit", {
      method: "POST",
      credentials: "include",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({message: message}),
  })
  const data = await response.json()
  if (data) {
      console.log(data)
  }   
  }

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="contact-form-title">Contact</h2>
        <label htmlFor="email" className="contact-form-label">Your Email</label>
        <input id="email" className="contact-form-input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'></input>
        <label htmlFor="name" className="contact-form-label">Your Name</label>
        <input id="name" className="contact-form-input" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'></input>
        <label htmlFor="message" className="contact-form-label">Message</label>
        <textarea
          id="message"
          className="contact-form-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message here..."
          required
        />

        <button type="submit" className="contact-form-button">Submit</button>
      </form>
    </div>
  )
}

export default ContactPage
