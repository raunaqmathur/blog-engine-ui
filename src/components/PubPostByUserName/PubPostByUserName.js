import React, {useEffect, useState} from 'react';
import './PubPostByUserName.css'
import CardPost from '../UI/CardPost/CardPost';

const PubPostByUserName = (props) => {
  const { userName } = props
  const [publishedPosts, setPublishedPosts] = useState([])
  let userId = sessionStorage.getItem("userName")
  if(userName)
    userId = userName
  useEffect(() => {
    fetch(`http://localhost:8080/post/user/getAllpublished?userName=${userId}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("data", data)
          const {lstPostResponse} = data
          console.log("lstPostResponse", lstPostResponse)
          setPublishedPosts(lstPostResponse)
          console.log("publishedPosts", publishedPosts)
        })
        .catch(console.log)
  }, []);
  console.log("publishedPosts1", publishedPosts)
  return (
    <CardPost link="ipubpost" width="80%" posts={publishedPosts} />
  );
}
export default PubPostByUserName;