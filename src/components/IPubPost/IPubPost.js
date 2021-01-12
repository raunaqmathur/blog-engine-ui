import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import './IPubPost.css'

const IPubPost = (props) => {

  const [publishedPostsData, setPublishedPostsData] = useState([])
  const [commentList, setCommentList] = useState([])

  const queryParams = queryString.parse(props.location.search)
  
  console.log("session user:  " + sessionStorage.getItem("userName"))
  console.log("postId: " + queryParams.id);
  useEffect(() => {
    fetch(`http://localhost:8080/post/getPost?postId=${queryParams.id}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("dataForPost", data)
          setPublishedPostsData(data)
        })
        .catch(console.log)

    fetch(`http://localhost:8080/comment/getAllForPost?postId=${queryParams.id}`, {
      method: 'get',
      headers: {'Content-Type':'application/json'}
      }) .then(res => res.json())
        .then((data) => {
          console.log("CommentsForPost", data)
          setCommentList(data)
        })
        .catch(console.log)

  }, []);
  console.log("publishedPosts1", publishedPostsData)
  console.log("commentList", commentList)
  return (
    <div>
      
    </div>
  );
}
export default IPubPost;