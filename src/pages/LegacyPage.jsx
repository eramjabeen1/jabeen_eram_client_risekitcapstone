import { useState } from 'react'

const LegacyPage = () => {
  const [letter, setLetter] = useState('')
  const [milestones, setMilestones] = useState([])
  const [input, setInput] = useState('')

  const addMilestone = () => {
    if (!input.trim()) return
    setMilestones([...milestones, input.trim()])
    setInput('')
  }

  const deleteMilestone = (index) => {
    const updated = [...milestones]
    updated.splice(index, 1)
    setMilestones(updated)
  }

  return (
    <div className="legacy-page">
      <h2>Legacy Letter</h2>
      <textarea
        rows={8}
        value={letter}
        onChange={(e) => setLetter(e.target.value)}
        placeholder="Write a message to your future self, your family, or your community..."
      />

      <h3>Self-Making Timeline</h3>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a milestone..."
      />
      <button onClick={addMilestone}>Add</button>

      <ul>
        {milestones.map((m, i) => (
          <li key={i}>
            {m}
            <button onClick={() => deleteMilestone(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LegacyPage
