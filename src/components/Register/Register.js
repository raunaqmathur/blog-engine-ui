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
    const {userName, password, firstName, lastName, email, blogName} = event.target

    fetch('http://localhost:8080/register', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "firstName" : firstName.value,
          "lastName" : lastName.value,
          "userName" : userName.value,
          "password" : password.value,
          "email" : email.value,
          "blogName":blogName.value,
          "website": "website"
      })
     }) .then(res => res.json())
        .then((data) => {
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
            <Textbox id="firstName" text="First Name" type="text" className="register-input-text" />
            <Textbox id="lastName" text="Last Name" type="text" className="register-input-text"/>
            <Textbox id="userName" text="UserName" type="text" className="register-input-text"/>
            <Textbox id="email" text="Email" type="text" className="register-input-text"/>
            <Textbox id="blogName" text="Blog Name" type="text" className="register-input-text"/>
            <Textbox id="password" text="Password" type="password" className="register-input-text"/>
            <div className="button-section">
                <input type="submit" value="Register" id="register" className="button"/>
            </div>
            {success && <div>{message}</div>}
          </div>
        </form>
      </div>

    </>
  );
}
export default Register;