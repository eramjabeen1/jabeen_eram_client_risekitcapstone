import { useEffect, useState } from 'react'
import { getJournalEntries, 
        deleteJournalEntry,
        updateJournalEntry,
} from '../services/journalService'


const JournalEntryList = ({ testMode }) => {
const [entries, setEntries] = useState([])
  const [editingId, setEditingId] = useState(null)
  const [editForm, setEditForm] = useState({})


  
 //const [editingEntry, setEditingEntry] = useState(null)


  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const data = await getJournalEntries(testMode)
        setEntries(data)
      } catch (err) {
        console.error('error fetching entries', err)
        alert('could not load journal entries')

      }
    }

    fetchEntries()
  }, [testMode]) // this will refetch my entries whenever toggle test/auth mode is on

 const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this entry?')
    if (!confirmDelete) return

   try {
      await deleteJournalEntry(id)
      setEntries((prev) => prev.filter((entry) => entry._id !== id))
    } catch (err) {
      console.error('Failed to delete entry:', err)
      alert('Could not delete entry.')
    }
  }

  const handleEdit = (entry) => {
  setEditingId(entry._id)
  setEditForm({
    title: entry.title,
    text: entry.text,
    mood: entry.mood,
    imposterScore: entry.imposterScore,
    imposterPlan: entry.imposterPlan,
    isPrivate: entry.isPrivate,
  })
}

  const handleSave = async (id) => {
    try {
      const updated = await updateJournalEntry(id, editForm, testMode)
      setEntries((prev) =>
        prev.map((e) => (e._id === id ? updated : e))
      )
      setEditingId(null)
    } catch (err) {
      alert('Failed to update entry.')
      console.error(err)
    }
  }
  return (
    <div className="journal-entries">
      <h3>Your Journal Entries</h3>
      {entries.length === 0 ? (
        <p>No entries yet.</p>
      ) : (
          <ul>
          {entries.map((entry) => (
            <li key={entry._id}>
              {editingId === entry._id ? (
                <>
                  <input
                    type="text"
                    value={editForm.title}
                    onChange={(e) =>
                      setEditForm({ ...editForm, title: e.target.value })
                    }
                  />
                  <textarea
                    value={editForm.text}
                    onChange={(e) =>
                      setEditForm({ ...editForm, text: e.target.value })
                    }
                  />
                  <select
                    value={editForm.mood}
                    onChange={(e) =>
                      setEditForm({ ...editForm, mood: e.target.value })
                    }
                  >
                    <option value="happy">Happy</option>
                    <option value="sad">Sad</option>
                    <option value="anxious">Anxious</option>
                    <option value="motivated">Motivated</option>
                    <option value="tired">Tired</option>
                    <option value="neutral">Neutral</option>
                  </select>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={editForm.imposterScore}
                    onChange={(e) =>
                      setEditForm({ ...editForm, imposterScore: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    value={editForm.imposterPlan}
                    onChange={(e) =>
                      setEditForm({ ...editForm, imposterPlan: e.target.value })
                    }
                  />
                  <label>
                    <input
                      type="checkbox"
                      checked={editForm.isPrivate}
                      onChange={(e) =>
                        setEditForm({
                          ...editForm,
                          isPrivate: e.target.checked,
                        })
                      }
                    />
                    Private
                  </label>
                  <button onClick={() => handleSave(entry._id)}>Save</button>
                </>
              ) : (
                <>
                  <h4>{entry.title}</h4>
                  <p>{entry.text}</p>
                  <p>
                    <strong>Mood:</strong> {entry.mood}
                  </p>
                  <p>
                    <strong>Imposter Score:</strong> {entry.imposterScore}
                  </p>
                  <p>
                    <strong>Private:</strong> {entry.isPrivate ? 'Yes' : 'No'}
                  </p>
                  <button onClick={() => handleEdit(entry)}>Edit</button>
                  <button onClick={() => handleDelete(entry._id)}>🗑 Delete</button>
                </>
              )}
              <hr />
            </li>
          ))}
        </ul>

      )}
    </div> 
        )
      }
export default JournalEntryList
