import Layout from "../components/Layout/Layout"
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from "./Home/Home"
import Shop from "./Shop/Shop"
import Cart from "./Cart/Cart"
import Checkout from "./Checkout/Checkout"
import ProductDetails from "./ProductDetails/ProductDetails"
import { Provider } from "react-redux"
import store from "../redux/store"
Provider
const App = () => {
  return (
  <Provider store={store}>
    <Layout>
      <Routes >
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  </Provider>

    
  )
}
export default App