import { useState } from 'react'
import JournalForm from '../components/JournalForm'
import JournalEntryList from '../components/JournalEntryList'
// import MoodPicker from '../components/MoodPicker'
// import StreakCounter from '../components/StreakCounter'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'




const JournalPage = () => {
  const [privateMode, setPrivateMode] = useState(false)
    const [testMode, setTestMode] = useState(true)

  return (
    <div className="journal-page-wrapper">
      <button onClick={() => setPrivateMode(!privateMode)} className="private-toggle">
        {privateMode ? <FaEyeSlash /> : <FaEye />}
      </button>

   {/*toggle between test and auth mode */}
      <button onClick={() => setTestMode(prev => !prev)} className="mode-toggle">
        {testMode ? 'Switch to Auth Mode' : 'Switch to Test Mode'}
      </button>

<Link to="/streaks" className="streaks-link">
  View Streak Stats
</Link>

<Link to="/planner" className="planner-link">
  Open Project Planner
</Link>

      {/* wrap blurred content properly inside this div */}
      <div className={`journal-page ${privateMode ? 'blurred-ui' : ''}`}>
        {/* streak and mood picker can come after MVP */}
        <JournalForm testMode={testMode} />
        <JournalEntryList testMode={testMode} />

      </div>
    </div>
  )
}

export default JournalPage
