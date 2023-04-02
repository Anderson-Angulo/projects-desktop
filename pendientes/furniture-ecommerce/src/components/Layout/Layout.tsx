import React from "react"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import "./Layout.css"
interface Props{
  children:React.ReactElement | React.ReactElement[]
}

const Layout = ({children}:Props) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>  
      <Footer />
    </>
  )
}
export default Layout