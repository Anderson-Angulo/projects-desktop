import { Provider } from 'react-redux'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import { AuthGuard } from './guards'
import { RoutesWithNotFound } from './helpers'
import { PrivateRoutes, PublicRoutes } from './models'
import { Admin } from './pages/Admin'
import { Login } from './pages/Login'
import { Private } from './pages/Private'
import store from './redux/store'

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login/>} />
              <Route element={<AuthGuard />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`}  element={<Private />}/>
                <Route path={`${PrivateRoutes.ADMIN}`}  element={<Admin />}/>
              </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
