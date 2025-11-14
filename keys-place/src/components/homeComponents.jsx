import { Link } from 'react-router-dom'
import '../styles/Home.css'

export function Navbar() {
  return (
    <nav className='navbar blur'>
      <div className='nav-list'>
        <Link to="/">Home</Link>
        <Link to="/apps">Apps</Link>
        <Link to="/games">Games</Link>
        <Link to="/settings">Settings</Link>
      </div>
    </nav>
  )
}

export function Title() {
  return (
    <>
      <h1>Keys Place</h1>
      <button>Release Notes</button>
    </>
  )
}
