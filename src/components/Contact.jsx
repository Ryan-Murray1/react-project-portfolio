import React, { useState } from 'react'
import Card from './Card';
import "./Contact.css";

const Contact = () => {
  const [inputData, setInputData] = useState({ name: "", surname: "", email: "", message: "" });
  const [submittedMessages, setSubmittedMessages] = useState([]);

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessages([...submittedMessages, inputData]);
    setInputData({ name: "", surname: "", email: "", message: "" });
  };

  return (
    <div>
      <h1 id="contact-me-h1">Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input id="nameInput" type="text" name="name" value={inputData.name} onChange={handleInput} placeholder="Name" required />
        <input id="surnameInput" type="text" name="surname" value={inputData.surname} onChange={handleInput} placeholder="Surname" required />
        <input id="emailInput" type="email" name="email" value={inputData.email} onChange={handleInput} placeholder="Email" required />
        <textarea id="messageInput" name="message" value={inputData.message} onChange={handleInput} placeholder="Message" rows='5' cols='50' required/>
        <button type="submit">Submit</button>
      </form>

      <h2 id="contact-me-h2">Messages</h2>
      {submittedMessages.map((msg, index) => (
        <Card key={index} name={msg.name} surname={msg.surname} email={msg.email} message={msg.message} />
      ))}
      
    </div>
  )
}

export default Contact;

