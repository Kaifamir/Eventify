import Header from "../components/DashboardComponents/Header"
import AddEventSection from "../components/DashboardComponents/AddEventSection"
import EventsList from "../components/DashboardComponents/EventsList"
import EventDashboard from "../components/DashboardComponents/EventDashboard"
import Navigation from "../components/DashboardComponents/Navigation"
import "./Dashboard.css"

function Dashboard() {
  return (
    <div className="dashboard">
      <Header />
      <main className="dashboard-main">
        <div className="left-column">
          <AddEventSection />
          <EventsList />
        </div>
        <div className="right-column">
          <EventDashboard />
        </div>
      </main>
      <Navigation />
    </div>
  )
}

export default Dashboard 