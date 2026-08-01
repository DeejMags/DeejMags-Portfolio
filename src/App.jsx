import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Home from './pages/Home.jsx'
import StackPage from './pages/StackPage.jsx'
import SkillsPage from './pages/SkillsPage.jsx'
import HobbiesPage from './pages/HobbiesPage.jsx'
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/stack" element={<StackPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/hobbies" element={<HobbiesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}
