import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import RecoveryPassword from '../containers/RecoveryPassword'
import Register from '../containers/Register'
import Checkout from '../pages/Checkout'
import Home from '../pages/Home'
import MyAccount from '../pages/MyAccount'
import NotFound from '../pages/NotFound'
import Orders from '../pages/Orders'
import SendEmail from '../pages/SendEmail'
import "../styles/global.scss"
const App = () => {
  return (
    <BrowserRouter>
      <Layout>    
        <Routes>
          <Route path="/" element={ <Navigate to="/home" /> } />
          <Route path='/home' element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/recovery-password" element={<RecoveryPassword />} />
          <Route path="/send-email" element={<SendEmail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App