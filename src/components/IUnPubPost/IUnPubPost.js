import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import {Redirect}  from 'react-router-dom'
import './IUnPubPost.css'
import Textbox from '../UI/TextBox/Textbox'

const IUnPubPost = (props) => {
  const [unPublishedPostData, setUnPublishedPostData] = useState({})
  const [messageText, setMessageText] = useState("")
  const [titleText, setTitleText] = useState("")
  const [redirect, setRedirect] = useState()

  const queryParams = queryString.parse(props.location.search)
  useEffect(() => {
    fetch(`http://localhost:8080/post/getPost?postId=${queryParams.id}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("dataForUnPublishedPostData", data)
          setUnPublishedPostData(data)
          setMessageText(data.message)
          setTitleText(data.title)
        })
        .catch(console.log)
  }, []);

  const onSave = (event) => {
    event.preventDefault();
    const {message, title} = event.target
    fetch('http://localhost:8080/post/update', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "userName": sessionStorage.getItem("userName"),
          "id": queryParams.id,
          "message": message.value,
          "title": title.value,
          "themeId": 1
      })
     }) .then(res => res.json())
        .then((data) => {
          setUnPublishedPostData(data)
        })
        .catch(console.log)
  };

  const onPublish = (event) => {
    event.preventDefault();
    fetch(`http://localhost:8080/post/publish?postId=${queryParams.id}`, {
      method: 'post',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res)
        .then((data) => {
          setRedirect(1)
        })
        .catch(console.log)
  };


  const onCancel = (event) => {
    setRedirect(1)
  }

  const onTitleChange = (event) => {
    const {message, value} = event.target
    console.log(" I am in onTitleChange: " + value)
    setTitleText(value)
  }

  const onMessageChange = (event) => {
    const {value} = event.target
    console.log(" I am in oneMessageChange: " + value)
    setMessageText(value)
  }

  if(redirect == 1) {    
    return <Redirect to="/" />
  }

  return (
    <div>
      <form onSubmit={onSave}>
        <div className="iunpub-container">
          <div className="edit-post-heading">Edit Post</div>
            <div className="iunpub-content">
              <textarea class="scrollabletextbox" name="title" id="title" className="iunpub-text-area-title" value={titleText} onChange={onTitleChange} />
              <textarea class="scrollabletextbox" name="message" id="message" className="iunpub-text-area-message" value={messageText} onChange={onMessageChange} />
            </div>
            <div className="iunpub-button-container">
              <input type="submit" className="iunpub-button" value="Save" id="saveButton" />
              <button className="iunpub-button" value="cancelButton" id="cancelButton" onClick={onCancel} >Cancel</button>
              <button className="iunpub-button" value="publishButton" id="publishButton" onClick={onPublish} >Publish</button>
            </div>
        </div> 
      </form>       
    </div>
  );
}
export default IUnPubPost;