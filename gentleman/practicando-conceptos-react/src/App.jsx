import { Cloudinary } from '@cloudinary/url-gen';
import { useDispatch, useSelector } from 'react-redux';
import "./App.css";
import Account from './components/Accounts';
import BadSetState from './components/BadSetState';
import { Previews } from './components/Cloudinary';
import { UserContextProvider } from './components/contexts/User';
import Currying from './components/Currying';
import Formulario from "./components/Formulario";
import Page1Context from './components/Page1Context';
import Page2Context from './components/Page2Context';
import { resetUser } from './redux/states/user.slice';
function App() {
  const user=useSelector(store=>store.user)
  const dispatcher=useDispatch()

  const logout=()=>{
    dispatcher(resetUser())
  }

  return (
      <div>
        <div className="container min-vh-100 d-flex flex-column justify-content-around align-items-center">
          {
            user.email
                ? ( <div className='d-flex justify-content-center flex-column align-items-center'>
                      <h2>Se ha logueado el usuario con email: {user.email}</h2>
                      <button className='btn btn-outline-danger btn-lg w-25' onClick={logout}>Salir</button>
                    </div> )
                : <Formulario />
          }
          <Currying />
          <Account type="hello" />
          <BadSetState />
          <h2>Uso de Estados globales: ReactContext</h2>
          <UserContextProvider>
            <Page1Context />
            <Page2Context />
          </UserContextProvider>
          <img src="https://res.cloudinary.com/dktxh8rv7/image/upload/v1678119777/Profile-afro.png" />
          <h2>Drag and Drop Preview</h2>
          <Previews />
        </div>
      </div>
  )
}

export default App
