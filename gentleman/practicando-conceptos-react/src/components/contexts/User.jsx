import { createContext, useMemo, useState } from "react";

export const UserContext=createContext()

export function UserContextProvider({children}){
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const value=useMemo(()=>{
    return {
      name,surname,setName,setSurname
    }
  },[name,surname])

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )

}