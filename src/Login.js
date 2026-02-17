import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import Header from './components/Header';


const Login = ({catchName}) => {
  const [userName,setUserName] = useState("");
  const getUserName = (e) => setUserName(e.target.value);

  return (
    <>
      <Header name={""}/>
      <div>Login</div>
      <input type='text' onChange={getUserName} id='nameArea'/>
      <Link to='/Home' onClick={catchName(userName)}>login</Link>
    </>
  )
}

export default Login