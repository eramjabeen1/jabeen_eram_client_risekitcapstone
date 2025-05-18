import React from 'react'

const StreakCounter = ({ entries }) => {
  // counting streak days
  //const today = new Date().toDateString()
  const uniqueDays = new Set()

  entries.forEach(entry => {
    const entryDate = new Date(entry.createdAt).toDateString()
    uniqueDays.add(entryDate)
  })

  const streak = uniqueDays.size

  return (
    <div className="streak-counter">
      <h3>Journal Streak</h3>
      <p>You’ve journaled on <strong>{streak}</strong> different day{streak !== 1 && 's'}!</p>
    </div>
  )
}

export default StreakCounter
