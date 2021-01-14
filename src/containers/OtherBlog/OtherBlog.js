import React, { useState, useEffect} from 'react';
import queryString from 'query-string';
import {Redirect}  from 'react-router-dom'
import './OtherBlog.css'
import PubPostByUserName from '../../components/PubPostByUserName/PubPostByUserName';
import SideNav from '../../components/SideNav/SideNav';

const OtherBlog = (props) => {
  const queryParams = queryString.parse(props.location.search)
  const [blogData, setBlogData] = useState({})
  useEffect(() => {
    fetch(`http://localhost:8080/blog?userName=${queryParams.userName}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("dataForPost", data)
          setBlogData(data)
        })
        .catch(console.log)
  }, []);

  const {name, userResponse ={}} = blogData
  const {firstName, lastName} = userResponse
  return (
    <>
      <div>
        <div className="blog-header">{name}</div>
        <div className="blog-author-text">Author: {firstName}  {lastName}</div>
      <section className="section">
        <PubPostByUserName  width="70%" userName={queryParams.userName}/>
        <SideNav />
      </section>
      </div>
    </>
  );
}
export default OtherBlog;