import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard';
import './Gallery.css'
import image1 from "../assets/images/image-1.png";
import image2 from "../assets/images/image-2.png";
import image3 from "../assets/images/image-3.png";
import image4 from "../assets/images/image-4.png";
import image5 from "../assets/images/image-5.png";
import image6 from "../assets/images/image-6.png";
import image7 from "../assets/images/image-7.png";
import image8 from "../assets/images/image-8.png";

const galleryData = [
  { image: image1, caption: "Caption" },
  { image: image2, caption: "Caption" },
  { image: image3, caption: "Caption" },
  { image: image4, caption: "Caption" },
  { image: image5, caption: "Caption" },
  { image: image6, caption: "Caption" },
  { image: image7, caption: "Caption" },
  { image: image8, caption: "Caption" }
]

const Gallery = () => { 
  // State for fetched images
  const [fetchedImages, setFetchedImages] = useState([]);
  const [message, setMessage] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState([]);
  const ACCESS_KEY="vRKBwbMafifTupyLcUXyMxKAiX8CLXRnlMbk3vIsVVxbJTF8jF4ngWnb"
  const randomImages = ["nature", "technology", "city", "animals", "art", "people"]
  

// Fetch images from an API
useEffect(() => {
  const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];

  fetch(`https://api.pexels.com/v1/search?query=${randomImage}&per_page=8`, {
    headers: {
      Authorization: ACCESS_KEY
    }
  })
  .then(response => response.json())
  .then(data => {
    const formattedData = data.photos.map(photo => ({
      image: photo.src.medium, // Medium-sized image
      caption: `${photo.photographer} - ${randomImage}` // Photographer name as caption
    }));
    setFetchedImages(formattedData);
  })
  .catch(error => console.error("Error fetching images:", error));
}, []);
// Simulate a POST request
const handleSubmit = (e) => {
  e.preventDefault();
  if (message.trim()) {
    const newMessage = { text: message, id: Date.now() };

    // Fake sending to a database (normally, we'd use fetch with POST here)
    console.log("Sending message:", newMessage);

    setSubmittedMessages([...submittedMessages, newMessage]);
    setMessage("");
  }
};

  return (
    <div className="gallery-container">
      <h1>My Portfolio Gallery</h1>
      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          < GalleryCard key={index} image={item.image} caption={item.caption} />
        ))}
      </div>

      {/* Second gallery for bonus challenge */}
      <h1>Dynamic Gallery</h1>
      <div className="gallery-grid">
        {fetchedImages.map((item, index) => (
          < GalleryCard key={index} image={item.image} caption={item.caption} />
        ))}
      </div>

      {/* Simulated POST Request */}
      <h2>Submit a Message</h2>
      <div className="gallery-form">
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <h3>Submitted Messages:</h3>
      <div className="gallery-submitted-messages">
        <ul>
          {submittedMessages.map(msg => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Gallery
