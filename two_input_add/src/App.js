

import React, { useState } from 'react'
import input from './components/input.css'
// import input from './components/input.css';

const App = () => {
  const [text1, settext1] = useState();
  const [text2, settext2] = useState();
  const [text3, settext3] = useState();


  //   const addd=()=>{
  //  settext3(text1+text2);
  //   }

  return (
    <div>
      <h1>Two input Add</h1>
      <input type='text' onChange={(e) => settext1(Number(e.target.value))}></input>
      <input type='text' onChange={(e) => settext2(Number(e.target.value))}></input>
      {/* <input type='number' min={1} value={text2} onChange={(e)=>settext2(Number(e.target.value))}></input> */}

      {/* choice of programmer out of button code or within  in button code */}
      {/* <button onClick={addd}>Calculate</button> */}
   

      <button onClick={() => {
      settext3(text1 + text2);
      }}> Click Me</button>


      <p>{text3}</p>
      </div>
  )
}

export default App
