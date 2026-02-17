import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import Task from "./components/Task";
import { useState } from "react";

function App() {
  const[name,setName]=useState("")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home name={name} />} />
        {/* <Route path="/task" element={<Task/>}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;