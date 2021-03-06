import React,{useEffect, useState}  from 'react'
import {Link, Redirect}  from 'react-router-dom'
import Textbox from '../UI/TextBox/Textbox'
import Button from '../UI/Button/Button'
import './Login.css'
import { render } from '@testing-library/react'

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [redirect, setRedirect] = useState();
  
  const onSubmit = (event) => {
    event.preventDefault();
    const {userName, password} = event.target

    console.log("I am in Login onclick function - " + userName.value + ", " + password.value);
    fetch('http://localhost:8080/signin', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "userName": userName.value,
          "password": password.value
      })
     }) .then(res => res.json())
        .then((data) => {
          console.log("sigINDATA******************* ", data)
          if(data.code){
            setSuccess(true);
          }
          else {
            setSuccess(false);
            setRedirect(1);
            sessionStorage.setItem("userName", data.userName)
          }
        })
        .catch(console.log)
  };

  if(!success && redirect == 1) {    
    return <Redirect to="/" />
  }
  
  return (    
    <div className="login-container">
      <div className="login-content">
        <div className="login-text">LOGIN</div>
        <div className="login-text">
          <span>
            Not a member yet?
          <a href="/register"> Register</a>
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <Textbox text="Username" type="text" id="userName" className="login-input-text" />
            <Textbox text="Password" type="password" id="password" className="login-input-text" />    
          </div>
          <div className="button-section">
            <input type="submit" value="Login" id="login" className="button"/>
          </div>
          
          {success && <div className="login-error">Invalid username or password!</div>}
          
        </form>
      </div>
    </div>
    
  );
}

export default Login