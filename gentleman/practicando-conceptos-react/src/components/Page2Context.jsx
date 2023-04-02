import { useContext } from "react";
import { UserContext } from "./contexts/User";

const Page2Context = () => {
  const {surname,setSurname} = useContext(UserContext);
  return (
    <div>
        Yo soy la Page2 y muestro el nombre:
      <div>
        <input type="text" value={surname} onChange={(e)=>setSurname(e.target.value)} />
      </div>
      {surname}
    </div>
  )
}
export default Page2Context