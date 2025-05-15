import LoginForm from '../components/LoginForm'
import { loginUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()

  const handleLogin = async (formData) => {
    try {
      const data = await loginUser(formData)
      localStorage.setItem('token', data.token)
      navigate('/journal') // send to main app page
    } catch (err) {
      console.error(err)
      alert('login failed')
    }
  }

  return <LoginForm onLogin={handleLogin} />
}

export default LoginPage
