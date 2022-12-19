
import './App.css';
import Form3 from "./Form3.js";
import Signout from'./Signout.js'
import {Route, Link, Routes } from "react-router-dom";
function App() {
  return (
    
    <div className="App">
      <img className='Appheaderimg' src='images/header.png'alt=''></img>
      <div className='Appbody'>
        <div className='Appbodyleft'>
          <p className='Appbodylefttitle'>Zence</p>
          <img className='Appbodyleftimg' src='images/images (29).jpeg'alt=''></img>
          <p className='Appbodyleftdesc'>Welcome back, </p>
          <p className='Appbodyleftname'>Taylor Simora</p>
          <p className='Appbodyleftprice'>$34,321 </p>
          <p className='Appbodyleftdesc'>Monthly budget </p>
          <div className='Nav'>
        <button type='submit'className='navbutn'>
        <i class='fa fa-pie-chart'aria-hidden='true'></i>
           Dashboard
        </button>
        <button type='submit'className='navbutn'>
        <i class='fa fa-bar-chart'aria-hidden='true'></i>
           Investments

        </button>
        <button type='submit'className='navbutn'>
        <i class='fa fa-exchange'aria-hidden='true'></i>
           Transactions
        </button>
        <button type='submit'className='navbutn'>
        <i class='fa fa-credit-card'aria-hidden='true'></i>
        wallet
        </button>
    </div>
    <button type='submit'className='signbutn'>
    <i class='fa fa-sign-out'aria-hidden='true'></i>
    <Link to='/signout'>
    Signout</Link>
    </button>
    
        </div>
        <div className='Appbodyright'>
          <Form3/>
        </div>
      </div>
      
      <Routes>
      
      
      </Routes>
    </div>
    
  );
}

export default App;
