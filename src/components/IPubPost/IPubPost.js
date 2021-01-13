import React, {useEffect, useState} from 'react';
import queryString from 'query-string';
import './IPubPost.css'
import CardPubPost from '../UI/CardPubPost/CardPubPost';
import CardPubPostComments from '../UI/CardPubPostComments/CardPubPostComments';
import Textbox from '../UI/TextBox/Textbox'

const IPubPost = (props) => {

  const [publishedPostData, setPublishedPostsData] = useState([])
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
  console.log("publishedPosts1", publishedPostData)
  console.log("commentList", commentList)

  const onSubmit = (event) => {
    event.preventDefault();
    const {commentText} = event.target

    console.log("I am in IPubPostSubmit onclick function - " + commentText.value + ", " + queryParams.id + ", " + sessionStorage.getItem("userName"));
    fetch('http://localhost:8080/comment/create', {
      method: 'post',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({  
          "userName": sessionStorage.getItem("userName"),
          "postId": queryParams.id,
          "message": commentText.value
      })
     }) .then(res => res.json())
        .then((data) => {
          console.log("COMMENT-DATA******************* ", data)
          let updateCommentList = []
          updateCommentList.push(data)
          commentList.forEach((comment) => updateCommentList.push(comment))
          console.log("updateCommentList " , updateCommentList)
          setCommentList(updateCommentList)
        })
        .catch(console.log)
  };

  return (
    <div>
      <div>
        <CardPubPost width="100%" post={publishedPostData} />
      </div>
      <div>
      <CardPubPostComments width="100%" comments={commentList}/>
    </div>
    {sessionStorage.getItem("userName") && 
      <div>
        <form onSubmit={onSubmit}>
          <div>
              <div>
              <Textbox text="Comment" type="text" id="commentText" />   
              </div>
              <div className="button">
                <input type="submit" value="Comment" id="commentButton"/>
              </div>
          </div>
        </form>
      </div>
    }
  </div>
  );
}
export default IPubPost;