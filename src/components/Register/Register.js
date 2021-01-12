import React,{useEffect, useState}  from 'react'
import {Link, Redirect}  from 'react-router-dom'
import Textbox from '../UI/TextBox/Textbox'
import Button from '../UI/Button/Button'
import './Register.css'

const Register = (props) => {

  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [redirect, seRedirect] = useState();

  const onSubmit = (event) => {
    event.preventDefault();
    const {userName, password, firstName, lastName, email} = event.target

    console.log("I am in Register onclick function - " + userName.value + ", " + password.value
    + firstName.value + ", " + lastName.value + email.value);
    fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "firstName" : firstName.value,
          "lastName" : lastName.value,
          "userName" : userName.value,
          "password" : password.value,
          "email" : email.value
      })
     }) .then(res => res.json())
        .then((data) => {
          console.log("RegisterDATA******************* ", data.code)
          if(data.code){
            setSuccess(true);
            setMessage(data.message)
          }
          else {
            setSuccess(false);
            seRedirect(1);
          }
        })
        .catch(console.log)

        if(!success)
          <Redirect to="/" />
  };

  if(!success && redirect == 1) {
    console.log("inside success******************* ", success)
    return <Redirect to="/" />
  }

  return (
    <>
      <div className="register-container">
        <div className="register-text">REGISTER</div>
        <div className="register-text">
          <span>
            Already a member?
          <a href="/login"> Login</a>
          </span>
        </div>
        <form onSubmit={onSubmit}>
          <div>
            <Textbox id="firstName" text="First Name" type="text" />
            <Textbox id="lastName" text="Last Name" type="text" />
            <Textbox id="userName" text="UserName" type="text" />
            <Textbox id="email" text="Email" type="text" />
            <Textbox id="password" text="Password" type="password" />
            <div className="button">
                <input type="submit" value="Register" id="register"/>
            </div>
            {success && <div>{message}</div>}
          </div>
        </form>
      </div>

    </>
  );
}
export default Register;