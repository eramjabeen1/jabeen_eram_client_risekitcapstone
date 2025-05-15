import axios from 'axios'

const API_URL = 'http://localhost:5000/api/journal'

// POST .. already done
export const createJournalEntry = async (entryData) => {
  const token = localStorage.getItem('token')
  const res = await axios.post(API_URL, entryData, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return res.data
}

// GET .. new
export const getJournalEntries = async () => {
  const token = localStorage.getItem('token')
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return res.data
}