import axios from 'axios'

const API = 'http://localhost:5000/api/auth' 

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${API}/register`, userData)
    return res.data // should return token or success message
  } catch (err) {
    console.error('register error:', err)
    throw err
  }
}

export const loginUser = async (userData) => {
  try {
    const res = await axios.post(`${API}/login`, userData)
    return res.data // should return token
  } catch (err) {
    console.error('login error:', err)
    throw err
  }
}
