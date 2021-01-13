import React,{useEffect}  from 'react'
import { Redirect } from 'react-router-dom'
import Textbox from '../UI/TextBox/Textbox'
import Button from '../UI/Button/Button'
import './Logout.css'
import { render } from '@testing-library/react'


const Logout = () => {

  useEffect(() => {
    sessionStorage.removeItem("userName")
  }, []);

  alert("Successfully Logged")  
  return <Redirect to="/" />

}

export default Logout