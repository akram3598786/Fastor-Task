import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Hompage from './Components/Home/Homepage';
import Login from './Components/Authentication/Login';
import Product from './Components/Product/Product';
import Signup from './Components/Authentication/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Hompage/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/product:prodId' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
