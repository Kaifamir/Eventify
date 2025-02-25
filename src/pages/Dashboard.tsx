import { UserButton } from "@clerk/clerk-react"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Eventify</h1>
        </div>
        <div className="header-right">
          <UserButton />
        </div>
      </header>
      <main className="dashboard-content">
        <div className="welcome-section">
          <h2>Welcome to Eventify!</h2>
          <p>Your personal event management dashboard</p>
        </div>
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h3>Upcoming Events</h3>
            <p>No upcoming events yet</p>
          </div>
          <div className="dashboard-card">
            <h3>Create Event</h3>
            <p>Start planning your next event</p>
          </div>
          <div className="dashboard-card">
            <h3>My Calendar</h3>
            <p>View your event schedule</p>
          </div>
          <div className="dashboard-card">
            <h3>Notifications</h3>
            <p>Stay updated with your events</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard 