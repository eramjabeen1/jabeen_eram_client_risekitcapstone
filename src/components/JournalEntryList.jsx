import { useEffect, useState } from 'react'
import { getJournalEntries } from '../services/journalService'

const JournalEntryList = () => {
  const [entries, setEntries] = useState([])

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getJournalEntries()
        setEntries(data)
      } catch (err) {
        console.error('error fetching entries', err)
        alert('could not load journal entries')
      }
    }

    fetchEntries()
  }, [])

  return (
    <div className="journal-entries">
      <h3>Your Journal Entries</h3>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
        <ul>
          {entries.map((entry) => (
            <li key={entry._id}>
              <h4>{entry.title}</h4>
              <p>{entry.text}</p>
              <p><strong>Mood:</strong> {entry.mood}</p>
              <p><strong>Imposter Score:</strong> {entry.imposterScore}</p>
              <p><strong>Private:</strong> {entry.isPrivate ? 'Yes' : 'No'}</p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default JournalEntryList
