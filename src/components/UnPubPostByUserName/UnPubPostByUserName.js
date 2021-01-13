import React, {useEffect, useState} from 'react';
import './UnPubPostByUserName.css'
import CardPost from '../UI/CardPost/CardPost';

const UnPubPostByUserName = (props) => {
  const [unPublishedPosts, setUnPublishedPosts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:8080/post/getAllUnpublished?userName=${sessionStorage.getItem("userName")}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("data", data)
          const {lstPostResponse} = data
          setUnPublishedPosts(lstPostResponse)
        })
        .catch(console.log)
  }, []);
  
  return (
    <CardPost link="iunpubpost" width="50%" posts={unPublishedPosts} />
  );
}
export default UnPubPostByUserName;