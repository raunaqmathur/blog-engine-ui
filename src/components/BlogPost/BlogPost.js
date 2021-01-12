import React, {useEffect, useState} from 'react';
import './BlogPost.css'
import CardPost from '../UI/CardPost/CardPost';

const BlogPost = (props) => {

  const [publishedPosts, setPublishedPosts] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/post/getAllpublished', {
      method: 'post',
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
    <CardPost name="first Post" width="70%" posts={publishedPosts} />
  );
}
export default BlogPost;