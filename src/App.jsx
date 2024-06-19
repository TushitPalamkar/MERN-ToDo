
import './App.css';
import ToDo from './components/ToDo';
import { useEffect, useState } from 'react';
import { addtodo, getalltodo,updatetodo,deletetodo } from './utils/HandleApi';


function App() {
  const[todo,settodo]=useState([])
  const[text,settext]=useState("")
  const[isupdating,setisupdating]=useState(false)
  const[todoid,settodoid]=useState("")
  useEffect(()=>{
    getalltodo(settodo)
  },[])
  const updateMode=(_id,text)=>{
    setisupdating(true)
    settext(text)
    settodoid(_id)
  }
  return (
    <div className="App">
    <div className="container">
      <h1>ToDo App</h1>
      <div className="top">
        <input type="text" placeholder='ADD ToDo..' value={text} onChange={(e)=>settext(e.target.value)}/>
        <div className="add" onClick={isupdating ?()=>updatetodo(todoid,text,settext,settodo,setisupdating):()=>addtodo(text,settext,settodo)}>
          {isupdating?"update":"Add"}</div>
      </div>
      <div className="list">
        {todo.map((item)=><ToDo key={item._id} text={item.text}
        updateMode={()=>updateMode(item._id,item.text)}
        deleteToDo={()=>deletetodo(item._id,settodo)}/>)}

      </div>
    </div>
    </div>
  );
}

export default App;
