import { useEffect, useState } from "react";

function App() {
  const [addnewproduct, setAddnewproduct] = useState();
  const [addproduct, setAddproduct] = useState([]);


  const handleInputChange = (e) => {
    setAddnewproduct(e.target.value);
      };

 const submitform = () => {
    if (addnewproduct.trim() !== "") {
      setAddproduct([...addproduct, addnewproduct]);
      setAddnewproduct("");
    }
  };
  // Optional code
  // const submitform = () => {
  //   setAddproduct((prevState) => {
  //    return [...prevState, addnewproduct];
  //     })
  //   };

  const handleDeleteTodo = (index) => {
        const updatedTodos = [...addproduct];
        updatedTodos.splice(index, 1);
        setAddproduct(updatedTodos);
      };


  return (
    <div className="App">
      <h1>Details_of Product_Form(TODO list(Show list of Array ))</h1>

    
      <input type="text" onChange={handleInputChange} placeholder="Enter the product :-" />
      {/* <input type="text"onChange={(e)=>setAddnewproduct(e.target.value)}placeholder="Enter the product :-"/> */}

      <button onClick={submitform}>Submit Data</button>
      {/* 
      <button onClick={() => {
        setAddnewproduct((prevState) => {
          return [...prevState, addproduct];
        })
      }}> Click Me</button> */}
 
      <ul>
        {addproduct.map((index) => {
          return (
            <>
              <li>{index}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
              
              {/* <button onClick={()=>{
              const updatedTodos =addproduct.filter((temp)=>
              {
                return  temp!=index;
              })
              setAddproduct(updatedTodos);
              }}>Delete</button> */}

              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
