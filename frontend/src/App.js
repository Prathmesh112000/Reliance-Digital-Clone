import { Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

import './App.css';
import Navbar from './components/NavFolder/Navbar';
import {Product} from './Pages/Product';
import IndividualProduct from "./components/IndividualProduct";
import Checkout from './Pages/Checkout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />        
        <Route path="/checkout" element={<Checkout />} />        

     </Routes>
 
      {/* <Navbar /> */}
      {/* <Product/> */}
      {/* <h1>Hello</h1> */}
      {/* <IndividualProduct/> */}
   
      </>
  );
}

export default App;
