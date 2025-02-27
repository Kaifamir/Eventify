import "./EventsList.css"

function EventsList() {
  return (
    <section className="events-list">
      <h2>Your Events</h2>
      <div className="events-container">
        <div className="no-events">
          <p>No events yet</p>
          <span>Create your first event to get started</span>
        </div>
      </div>
    </section>
  )
}

export default EventsList 