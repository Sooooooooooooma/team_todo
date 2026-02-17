
import { useEffect, useState } from "react";
import "./Home.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";

function Home({name}) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState(()=>{
    const saved =localStorage.getItem("tasks");
    if(saved){
        return JSON.parse(saved);
    }
    return[];
  });

  const deleteTask = (index) => {
    const newTasks=tasks.filter((task,i)=>{
        return i !==index;
    });
    setTasks(newTasks);
}
const handleChange=(event)=>{
setText(event.target.value);
 
}
const handleAdd=()=>{
    if(text.trim()==="")return;
    setTasks([...tasks,text])
    setText("");
    console.log(tasks)
}

useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
},[tasks]);


  return (
    <div>
      <Header name={name} />

      <input className="textarea" value={text} onChange={(event)=>handleChange(event)}/>
      <button className="add" onClick={handleAdd}>追加</button>

      <ul >
        {tasks.map((task,index) => (
          <Task key={index} task={task} handleDelete={()=>deleteTask(index)} />
        ))}
      </ul>

      <Footer />
    </div>
  );
}

export default Home;