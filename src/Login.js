import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import "./Login.css";


const Login = ({catchName}) => {
  const [userName,setUserName] = useState("");
  const getUserName = (e) => setUserName(e.target.value);
  const navigate = useNavigate();
  const allow = () => {
    if(userName.trim() !== "") {
      catchName(userName);
      navigate('/Home');
    }else alert("ユーザー名が入力されていません。");
  }


  return (
    <>
      <Header name={""}/>
      <div className='content'>
        Login
        <input type='text' onChange={getUserName} id='nameArea' placeholder='ユーザー名'/>
        <button onClick={allow}>アクセス</button>
      </div>
    </>
  )
}

export default Login