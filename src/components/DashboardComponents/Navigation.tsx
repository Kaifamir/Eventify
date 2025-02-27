import "./Navigation.css"

function Navigation() {
  return (
    <nav className="dashboard-nav">
      <button className="nav-item active">
        <span className="icon">📅</span>
        Events
      </button>
      <button className="nav-item">
        <span className="icon">✓</span>
        Todos
      </button>
      <button className="nav-item">
        <span className="icon">💰</span>
        Budget
      </button>
      <button className="nav-item">
        <span className="icon">🤖</span>
        Ask AI
      </button>
    </nav>
  )
}

export default Navigation 