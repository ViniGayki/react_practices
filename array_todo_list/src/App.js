// import logo from './logo.svg';

import React, { useState } from 'react';

function App() {
  const [task, settask] = useState();
  const [arra, setarra] = useState(['Ram', 'Sham', 'Dham']);


  return (
    <div>
      <input type='text' onChange={(e) => settask(e.target.value)} />


      <button onClick={() => {
        setarra((prevState) => {
          return [...prevState, task];
        })
      }}> Click Me</button>



      <ul>
        {
          arra.map((item) => {
            return (
              <>
                <li>{item}</li>

                <button onClick={() => {
                  const tempArray = arra.filter((temp) => {
                    return temp != item;
                  })
                  setarra(tempArray);
                }} >Remove</button>


              </>
            )
          }
          )}
      </ul>

    </div>
  );
}

export default App;
