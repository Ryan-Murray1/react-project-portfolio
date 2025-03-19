import React from 'react'


const GalleryCard = ({ image, caption }) => {

  return (
    <div>
        <img src={image} alt={caption} className="gallery-image" />
        <p className="gallery-caption">{caption}</p>
    </div>
  )
}

export default GalleryCard
