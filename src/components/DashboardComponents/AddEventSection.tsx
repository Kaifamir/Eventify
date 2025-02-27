import "./AddEventSection.css"

function AddEventSection() {
  return (
    <section className="add-event-section">
      <h2>Add Event</h2>
      <button className="add-event-button">
        <span>+</span> Add Event
      </button>
      <button className="ai-event-button">
        <span>⚡</span> Create Event with AI
      </button>
    </section>
  )
}

export default AddEventSection 