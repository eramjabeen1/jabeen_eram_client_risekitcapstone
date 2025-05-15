import { useState } from 'react'
import { createJournalEntry } from '../services/journalService'

const JournalForm = ( { testMode } ) => {
  const [formData, setFormData] = useState({
    title: '',
    text: '',
    mood: '',
    imposterScore: 1,
    imposterPlan: '',
    isPrivate: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

 const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const res = await createJournalEntry(formData, testMode)
    console.log('Journal entry saved:', res)

    setFormData({
      title: '',
      text: '',
      mood: '',
      imposterScore: 1,
      imposterPlan: '',
      isPrivate: false,
    })
  } catch (err) {
    console.error('Failed to save entry:', err)
    alert('Something went wrong saving your entry.')
  }
}


  return (
    <form onSubmit={handleSubmit} className="journal-form">
      <h2>New Journal Entry</h2>

      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label>Entry Text:</label>
      <textarea
        name="text"
        value={formData.text}
        onChange={handleChange}
      ></textarea>

      <label>Mood:</label>
      <select name="mood" value={formData.mood} onChange={handleChange}>
        <option value="">Select a mood</option>
        <option value="happy">Happy</option>
        <option value="sad">Sad</option>
        <option value="anxious">Anxious</option>
        <option value="tired">Tired</option>
        <option value="motivated">Motivated</option>
        <option value="neutral">Neutral</option>
      </select>

      <label>How imposter-y are you feeling? (1–10):</label>
      <input
        type="number"
        name="imposterScore"
        min="1"
        max="10"
        value={formData.imposterScore}
        onChange={handleChange}
      />

      <label>What will you do to fight it?</label>
      <input
        type="text"
        name="imposterPlan"
        value={formData.imposterPlan}
        onChange={handleChange}
      />

      <label>
        <input
          type="checkbox"
          name="isPrivate"
          checked={formData.isPrivate}
          onChange={handleChange}
        />
        Make this entry private
      </label>

      <button type="submit">Save Entry</button>
    </form>
  )
}

export default JournalForm
