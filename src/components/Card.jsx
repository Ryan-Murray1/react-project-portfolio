import React from 'react'
import "./Card.css"

const Card = ({ name, surname, email, message }) => {
  return (
    <div className="card">
      <h3>{name} {surname}</h3>
      <p>{email}</p>
      <p>{message}</p>
    </div>
  );
};

export default Card;

