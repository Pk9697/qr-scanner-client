import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import History from './pages/History'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import PrivateRoute from './components/PrivateRoute'
import Register from './pages/Register'

function App() {
  const [isHomePage, setIsHomePage] = useState(false)
  return (
    <Router>
      <Header isHomePage={isHomePage} setIsHomePage={setIsHomePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
