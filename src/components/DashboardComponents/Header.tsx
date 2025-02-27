import { UserButton } from "@clerk/clerk-react"
import "./Header.css"

function Header() {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1>
          <span className="event">event</span>
          <span className="ify">ify</span>
          <span className="dot">.</span>
        </h1>
        <p className="subtitle">Celebrate life, one event at a time.</p>
      </div>
      <div className="header-right">
        <UserButton />
      </div>
    </header>
  )
}

export default Header 