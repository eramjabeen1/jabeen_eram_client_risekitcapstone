import axios from 'axios'

const API_URL = 'http://localhost:5000/api/journal'

// POST .. already done
export const createJournalEntry = async (entryData, testMode = true) => {
  const token = localStorage.getItem('token')
  const config = {} // base config again

 // if testMode is false...include the auth token
  if (!testMode) {
    config.headers = { Authorization: `Bearer ${token}` }
  }
  const res = await axios.post(API_URL, entryData, config)
  return res.data
}

// GET .. new
export const getJournalEntries = async (testMode = true) => {
  const token = localStorage.getItem('token')
  const config = [] // setting base config
// if testMode is true..skips adding the jwt token in the request headers
// this lets us fetch entries that use a fake test user instead of real login
// if testMode is false.. includes the token to get real users entries from jwt
if (!testMode) {
  config.headers = { Authorization: `Bearer ${token}` }
}


  // if not in test mode adding auth headers
  if(!testMode) {

    config.headers = { Authorization: `Bearer ${token}` }
  }
  const res = await axios.get(API_URL, config)
  return res.data
}