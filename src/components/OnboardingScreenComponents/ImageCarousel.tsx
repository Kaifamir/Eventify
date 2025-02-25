import { useState, useEffect } from 'react'
import './ImageCarousel.css'
import babyShowerStock from '../../assets/events/AdobeStock_191302838.jpeg'
import indianWeddingStock from '../../assets/events/AdobeStock_183485123.jpeg'
import birthdayStock from '../../assets/events/AdobeStock_221102004.jpeg'
import dinnerPartyStock from '../../assets/events/AdobeStock_982487623.jpeg'
import clubPartyStock from '../../assets/events/AdobeStock_261842772.jpeg'

const images = [
  indianWeddingStock,  // Indian Wedding (Adobe Stock)
  babyShowerStock,     // Baby Shower (Adobe Stock)
  birthdayStock,       // Birthday Party (Adobe Stock)
  dinnerPartyStock,    // Dinner Party (Adobe Stock)
  clubPartyStock        // Club Party (Adobe Stock)
]

function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 6000) // 6 seconds per slide
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="image-carousel">
      {images.map((img, index) => (
        <div
          key={img}
          className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
      <div className="carousel-overlay" />
    </div>
  )
}

export default ImageCarousel 