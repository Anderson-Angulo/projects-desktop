import { useContext } from "react";
import { UserContext } from "./contexts/User";

const Page1Context = () => {
  const {name,setName} = useContext(UserContext);
  return (
    <div>
      Yo soy la Page1 y muestro el nombre:
      <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      {name}
    </div>
  )
}
export default Page1Context