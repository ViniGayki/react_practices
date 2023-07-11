
import React, { useCallback, useState } from 'react';
import './App.css';
import Button from'./components/UI/Button/Button';


 function App() {
  const [para,setpara]=useState(true);
  const togglepara=useCallback(()=>{
  setpara(showpara=>!showpara);
  },[]);

  return (
    <div className='app'> 
    <h1>Used Memo and useCallback</h1>
     {para && (<p>I am para</p>)}
     <Button onClick={togglepara} >Click Me</Button>
    </div>
  );
}

 export default App;