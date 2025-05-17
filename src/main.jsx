import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JournalPage from './pages/JournalPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import RegisterPage from './pages/RegisterPage.jsx'
import StreakStatsPage from './pages/StreakStatsPage'

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/streaks" element={<StreakStatsPage />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
