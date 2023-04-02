import { BrowserRouter,Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login'
import { Netflix } from './pages/Netflix'
import { Signup } from './pages/Signup'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Netflix />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>   
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
