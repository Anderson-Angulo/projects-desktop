import { Component } from "react"
import AdminAccount from "./AdminAccount"
import ModeratorAccount from "./ModeratorAccount"

const AccountsMap={
  'admin':AdminAccount,
  'moderator':ModeratorAccount
}

const Account = ({type}) => {
  const Component=AccountsMap[type] 
  return (
    <div>
      <h1>Mi tipo de cuenta es:</h1>
      {
        Component && <Component />
      }
    </div>
  )
}
export default Account