import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JournalPage from './pages/JournalPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import StreakStatsPage from './pages/StreakStatsPage'
import PlannerPage from './pages/PlannerPage'
import LegacyPage from './pages/LegacyPage'
import MatchaLoungePage from './pages/MatchaLoungePage'


import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/streaks" element={<StreakStatsPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/legacy" element={<LegacyPage />} />
       <Route path="/matcha" element={<MatchaLoungePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
