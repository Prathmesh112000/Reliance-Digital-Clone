
import './App.css';
import Navbar from './components/NavFolder/Navbar';
import {Product} from './Pages/Product';
import IndividualProduct from "./components/IndividualProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product/>
      {/* <h1>Hello</h1> */}
      <IndividualProduct/>
    </div>
  );
}

export default App;
