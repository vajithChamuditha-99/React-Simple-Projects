import './App.css';
import React, { useEffect, useState } from 'react';
import UIComponent from './Components/UIComponent';

function App() {

  const [alert, setAlert] = useState(true);
      
  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 3000);
    
    // To clear or cancel a timer, you call the clearTimeout(); method, 
    // passing in the timer object that you created into clearTimeout().
    
    return () => clearTimeout(timer);
  }, [alert]);

  return (
    <div className="App">
      {/* <UIComponent/> */}
      <>
      {alert && <div ><h1>This is showing to you</h1></div>}
      <button onClick={()=>setAlert(true)}>click me</button>
      </>
    </div>
  );
}

export default App;
