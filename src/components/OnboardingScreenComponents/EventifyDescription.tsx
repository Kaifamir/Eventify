import type React from "react"
import "./EventifyDescription.css"

const EventifyDescription: React.FC = () => {
  return (
    <div className="eventify-description">
      <div className="feature">
        <span className="feature-icon">🎉</span>
        <div className="feature-text">
          <span className="feature-main">Effortless Planning</span>
          <span className="feature-subtext">From weddings to birthdays</span>
        </div>
      </div>
      <div className="feature">
        <span className="feature-icon">🍰</span>
        <div className="feature-text">
          <span className="feature-main">Local Vendors</span>
          <span className="feature-subtext">Tailored to your needs</span>
        </div>
      </div>
      <div className="feature">
        <span className="feature-icon">🤖</span>
        <div className="feature-text">
          <span className="feature-main">AI Suggestions</span>
          <span className="feature-subtext">Personalised for you</span>
        </div>
      </div>
      <div className="feature">
        <span className="feature-icon">🗓️</span>
        <div className="feature-text">
          <span className="feature-main">All-in-One Management</span>
          <span className="feature-subtext">Streamlined organization</span>
        </div>
      </div>
    </div>
  )
}

export default EventifyDescription

