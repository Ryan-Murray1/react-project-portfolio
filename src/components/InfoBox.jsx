import React from 'react';
import './InfoBox.css';

const InfoBox = ({ title, content }) => {
  return (
    <div className="info-box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default InfoBox;
