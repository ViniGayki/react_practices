import React, { useState } from 'react';
import './Basiclogin.css';
import { useTransition } from 'react';

const Basiclogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitform =(e)=>{
    // do not jump another form thatswhy using    e.preventDefault();
    e.preventDefault();
  const newEntry={email:email,password:password};
  setAllEntry([...allEntry,newEntry]);
  }
  return (
    <>
      <form action='' onSubmit={submitform}>
        <h1>LoginForm</h1>
        <div>
          <label htmlFor='email'>Enter the email id:-</label>
          <input type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div><br></br><br></br>
        <div>
          <label htmlFor='password'>Enter the passwd:-</label>
          <input type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className='buttonlogin' type='submit'>login</button>
      </form>
      <div>
      {
      allEntry.map((curElem) =>{
        return(
          <div>
          <p>{curElem.email}</p>
          <p>{curElem.password}</p>
          </div>
        )

          })

        }


      </div>
    </>
  )
}

export default Basiclogin

