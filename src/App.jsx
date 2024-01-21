
import { Route, Routes } from 'react-router'
import './App.css'
import Firstclass from './components/Firstclass'
import Signup from './pages/Signup'
import Login from './pages/Login'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstclass />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
