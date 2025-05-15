import { useState } from 'react'

const RegisterForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>register</h2>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">sign up</button>
    </form>
  )
}

export default RegisterForm
