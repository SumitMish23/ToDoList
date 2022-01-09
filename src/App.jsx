import React,{ useState } from "react";
import './App.css';
import Todos from "./Todo.jsx";

const App=()=> {
 const [inputlist,setInputList]=useState("");
 const [Items,setItems]= useState([]);
 
 const getInputvalue=(e)=>{
   setInputList(e.target.value);
 
   
 };
 const listofitems=()=>{
   setItems((oldItems)=>{
     return [...oldItems,inputlist];
   });
    setInputList(" ");
 }
 const deleteitems=(id)=>{
  // setItems((oldItems)=>{
  //   console.log(id);
  //     return oldItems=oldItems.splice(id,1);
     setItems((oldItems)=>{
      return oldItems.filter((arrElement,index)=>{
         return index !==id;
      });
   
  })
    
   
 }
  
  return (
    <>
    <div className='main_div'>
      <div className='center_div'>
        <br />
        <h1>To Do List</h1>
        <br />
        <input type="text" placeholder='Add Items' onChange={getInputvalue} value={inputlist}/>
        <button onClick={listofitems}> + </button>
        
        


        <ol>
         { Items.map((itemval,index)=>{
           console.log("Inside");
            return <Todos
            text={itemval} 
            key={index} 
            id={index}
            onselect={deleteitems} />;
          })
        }
        </ol>
      </div>
      

    </div>
    </>
  )
    
  
}

export default App;
