import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Hompage from './Components/Home/Homepage';
import Login from './Components/Authentication/Login';
import Product from './Components/Product/Product';
import OTP from './Components/Authentication/OTP/OTP';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Hompage/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/verify' element={<OTP/>}/>
        <Route path='/:prodId' element={<Product/>}/>
      </Routes>
    </div>
  );
}

export default App;
