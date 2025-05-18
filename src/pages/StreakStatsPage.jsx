import { useEffect, useState } from 'react'
import { getJournalEntries } from '../services/journalService'
import StreakCounter from '../components/StreakCounter'


const StreakStatsPage = ({ testMode = true }) => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getJournalEntries(testMode)
        setEntries(data)
      } catch (err) {
        alert('Could not load journal entries')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [testMode])

  // helperrrr to format date to YYYY-MM-DD
  const formatDate = (iso) => new Date(iso).toISOString().split('T')[0]

  // sorting entries by date
  const dates = [...new Set(entries.map(e => formatDate(e.createdAt)))].sort()

  // longest streak calculation
  let longest = 0
  let current = 0
  let prevDate = null

  dates.forEach(date => {
    const thisDate = new Date(date)
    if (prevDate) {
      const diff = (thisDate - prevDate) / (1000 * 60 * 60 * 24)
      if (diff === 1) {
        current++
      } else {
        current = 1
      }
    } else {
      current = 1
    }
    if (current > longest) longest = current
    prevDate = thisDate
  })

  // mood stats
  const moodCounts = {}
  let totalImposter = 0

  entries.forEach(e => {
    if (e.mood) moodCounts[e.mood] = (moodCounts[e.mood] || 0) + 1
    totalImposter += e.imposterScore || 0
  })

  const mostCommonMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A'
  const avgImposter = entries.length ? (totalImposter / entries.length).toFixed(1) : 'N/A'

  return (
    <div className="streaks-page">
      <h2>Streak & Mood Stats</h2>
      <StreakCounter entries={entries} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p><strong>Total Entries:</strong> {entries.length}</p>
          <p><strong>Longest Streak:</strong> {longest} days</p>
          <p><strong>Most Common Mood:</strong> {mostCommonMood}</p>
          <p><strong>Average Imposter Score:</strong> {avgImposter}</p>
        </>
      )}
    </div>
  )
}

export default StreakStatsPage

