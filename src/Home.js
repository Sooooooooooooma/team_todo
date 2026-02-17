
import { useState } from "react";
import "./Home.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Task from "./components/Task";

function Home({name}) {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([
    "いちごを食べる",
    "白菜を買いに行く",
    "窓を掃除する",
    "パンを焼く",
  ]);

  const deleteTask = () => {
  

}


  return (
    <div>
      <Header name={name} />

      <input className="textarea" value={text}/>
      <button className="add">追加</button>

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