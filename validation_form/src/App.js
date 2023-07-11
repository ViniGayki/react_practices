import React, { useEffect, useState } from 'react'
import './index.css';
function App() {
  const [fname, setFname] = useState('');
  const [isnameValid, setIsnameValid] = useState(true);
  const [isformValid,setIsformValid]= useState(false);
  const[isnameTouch,setIsnameTouch]=useState(false)

  // for data show used
  useEffect(() => {
    if (isnameValid) {
      setIsformValid(true);

    }else{
      setIsformValid(false);
    }
  }, [isnameValid]);


  // used to the submite button operation 
  const submitform = (e) => {
    e.preventDefault();
    if (fname === '') {
      setIsnameValid(false);

    }
    console.log('Insid  form submmit');
  }

//Remove the inputbax text then check the validaton
  const onchangefnamehandaler=(e)=>{
    setFname(e.target.value)
    if (e.target.value === '') {
      setIsnameValid(false);
}
  }

// out of input box click then show error check the validation
  const blurfnamehandaler = () => {
    if (fname === '') {
      setIsnameValid(false);

    }
  }

  return (
    <form action='' onSubmit={submitform}>
      <div className={!isnameValid &&   !isnameTouch? 'form-control invalid' : 'form-control'}>
        <h1>From with validation</h1>

        <input htmltype='text' name='fname' value={fname} onChange={onchangefnamehandaler} onBlur={blurfnamehandaler } />

        {!isnameValid && <p className={!isnameValid &&  !isnameTouch? 'error-text' : ''}>Name is not valide</p>}

        <button disabled={!isformValid}>Submit</button>

      </div> 
    </form>
  );
}
 
export default App;
