import React from 'react';

import './App.css';
import Button from './button';
import MyClassComponent from './MyClassComponent';

function App() {
  return (
    <><h1 className='card' style={{backgroundColor:"navyBlue",color:"black"}}>CARD</h1>
    <Button name="john" age={4} phoneNo={7687687} Graduate='yes'/>
    <Button name="somthing" age={6} phoneNo={7869699} Graduate='Yes'/>
    <Button name="lakshmi" age={24} phoneNo={9876543210} Graduate="Yes"/>
    <Button name="reddy" age={26} phoneNo={1234567890} Graduate="No"/> 
    <MyClassComponent />
  
</>
  )
}

export default App;
