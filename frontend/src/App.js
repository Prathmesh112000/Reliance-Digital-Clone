import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

import './App.css';
import Navbar from './components/NavFolder/Navbar';
import {Product} from './Pages/Product';
import IndividualProduct from "./components/IndividualProduct";
import Checkout from './Pages/Checkout';
import Signup from "./components/Authentication/Signup"
import Sign from './components/Authentication/Sign';
import Login from "./components/Authentication/Login"
function App() {
  return (
    <>
     <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />        
        <Route path="/product" element={<Product/>} /> 
        <Route path="/checkout" element={<Checkout />} />     
        <Route path="/signup" element={<Signup />} />    
        <Route path="/login" element={<Login />} /> 
        

     </Routes>
 
     
      {/* <Product/> */}
      {/* <h1>Hello</h1> */}
      {/* <IndividualProduct/> */}
      {/* <Checkout/> */}
  
    {/* <Signup/> */}
    {/* <Login/> */}
    {/* <Sign/> */}
    </>
  );
}

export default App;
