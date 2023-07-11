

import ExpenseDate from './ExpenseDate';
 import './ExpenseItem.css';
 import { useState } from 'react';

function ExpenseItem(props){
// function name(){
//     // const valu={Update};
// alert('Update!')
   
//    }

const [namee,setName]=useState(props.title);

const changecontend =()=>{
setName('UpdateMe')
}
    return(
        <div className="expense-item">
           <div>{props.date.toISOString()}</div>
            <h2>{namee}</h2>
           <div className='expense-item__price'>${props.amount}</div>
           <button className='expense-item__price' onClick={changecontend}>Change the title</button>
           
        </div>
    );
}
export default ExpenseItem; 