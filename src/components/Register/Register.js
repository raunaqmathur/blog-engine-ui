import React from 'react';
import Textbox from '../UI/TextBox/Textbox'
import Button from '../UI/Button/Button'
import './Register.css'

const Register = (props) => {
  return (
    <>
      <div className="register-container">
        <div className="register-text">REGISTER</div>
        <div className="register-text">
          <span>
            Not a member yet?
          <a href="/login"> Login</a>
          </span>
        </div>
        <Textbox id="firstName" text="First Name" type="text" />
        <Textbox id="lastName" text="Last Name" type="text" />
        <Textbox id="email" text=" Email" type="text" />
        <Textbox id="password" text=" Password" type="password" />
        <Button text="Submit" id="submit" />
      </div>

    </>
  );
}
export default Register;