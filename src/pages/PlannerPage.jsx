import React, { useState } from 'react'

const PlannerPage = () => {
  const [goals, setGoals] = useState([])
  const [goalInput, setGoalInput] = useState('')
  const [crumbs, setCrumbs] = useState('')

  const addGoal = () => {
    if (!goalInput.trim()) return
    setGoals([...goals, { text: goalInput, done: false }])
    setGoalInput('')
  }

  const toggleGoal = (index) => {
    const updated = [...goals]
    updated[index].done = !updated[index].done
    setGoals(updated)
  }

  const deleteGoal = (index) => {
    const updated = [...goals]
    updated.splice(index, 1)
    setGoals(updated)
  }

  return (
    <div className="planner-page">
      <h2>Project Planner</h2>

      <input
        type="text"
        value={goalInput}
        onChange={(e) => setGoalInput(e.target.value)}
        placeholder="Add a coding goal..."
      />
      <button onClick={addGoal}>Add</button>

      <ul>
        {goals.map((goal, i) => (
          <li key={i}>
            <input
              type="checkbox"
              checked={goal.done}
              onChange={() => toggleGoal(i)}
            />
            {goal.text}
            <button onClick={() => deleteGoal(i)}>Delete</button>
          </li>
        ))}
      </ul>

      <h3>Messy Code & Crumbs</h3>
      <textarea
        rows={8}
        value={crumbs}
        onChange={(e) => setCrumbs(e.target.value)}
        placeholder="Paste raw ideas, bugs, or code snippets here..."
      />
    </div>
  )
}

export default PlannerPage
