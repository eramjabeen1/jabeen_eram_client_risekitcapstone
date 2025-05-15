import RegisterForm from '../components/RegisterForm'
import { registerUser } from '../services/authService'
import { useNavigate } from 'react-router-dom'

const RegisterPage = () => {
  const navigate = useNavigate()

  const handleRegister = async (formData) => {
    try {
      const data = await registerUser(formData)
      localStorage.setItem('token', data.token)
      navigate('/journal')
    } catch (err) {
      console.error(err)
      alert('registration failed')
    }
  }

  return <RegisterForm onRegister={handleRegister} />
}

export default RegisterPage
