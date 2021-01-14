import React, { useState} from 'react';
import queryString from 'query-string';
import {Redirect}  from 'react-router-dom'
import './MyBlog.css'
import PubPostByUserName from '../../components/PubPostByUserName/PubPostByUserName';
import UnPubPostByUserName from '../../components/UnPubPostByUserName/UnPubPostByUserName';
import Textbox from '../../components/UI/TextBox/Textbox'

const MyBlog = (props) => {
  const [redirect, setRedirect] = useState()
  const onCancel = (event) => {
    setRedirect(1)
  }

  const onSave = (event) => {
    event.preventDefault();
    const {messageText, titleText} = event.target
    
    fetch('http://localhost:8080/post/create', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "userName": sessionStorage.getItem("userName"),
          "message": messageText.value,
          "title": titleText.value,
          "themeId": "1"
      })
     }) .then(res => res.json())
        .then((data) => {
          setRedirect(1)
        })
        .catch(console.log)
  };

  if(redirect == 1) {    
    return <Redirect to="/" />
  }

  return (
    <>
      <div>
      <section className="section">
        <UnPubPostByUserName />
        <PubPostByUserName width="50%"/>
      </section>
      
      {sessionStorage.getItem("userName") && 
        <div>
          <form onSubmit={onSave}>
              <div>
                <div className="new-post-heading">Create New Post</div>
              <textarea class="scrollabletextbox" name="title" id="titleText" className="text-area-title" placeholder="Title" />
              <textarea class="scrollabletextbox" name="message" id="messageText" className="text-area-message" placeholder="Description" />
              </div>
              <div className="myblog-button-section">
                <input type="submit" className="myblog-button" value="Save" id="saveButton" />
                <button className="myblog-button" value="cancelButton" id="cancelButton" onClick={onCancel} >Cancel</button>
              </div>
          </form>
        </div>
      }
      
      </div>
    </>
  );
}
export default MyBlog;