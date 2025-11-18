import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Title, Account, Preferences, Themes, Credits, Description } from '../components/homeComponents'
//
import '../styles/Home.css'

function HomePage() {
  return (
    <>
      <Title />
    </>
  )
}

function AppsPage() {
  return <h2>Apps Page</h2>
}

function GamesPage() {
  return <h2>Games Page</h2>
}

function SettingsPage() {
  return (
    <>
      <h2>Settings</h2>
      <Account />
      <Preferences />
      <Themes />
      <Credits />
      <Description />
    </>
  )
}

// Adds the navbar on every page
export default function Home() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AppsPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  )
}
