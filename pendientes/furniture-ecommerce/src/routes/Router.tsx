import {BrowserRouter,Routes,Route} from 'react-router-dom'
import App from '../pages/App'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
