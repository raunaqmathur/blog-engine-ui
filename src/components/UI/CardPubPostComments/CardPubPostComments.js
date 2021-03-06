import React from 'react'
import Logo from '../../Logo/Logo'
import HeaderNav from '../../HeaderNav/HeaderNav';
import './CardPubPostComments.css'

const CardPubPostComments = (props) => {
  const {  width, comments } = props


  const showComments = () => {
    console.log("inside showComments", comments)
    const postsHTML = []
    if(comments && comments.length > 0) {
      comments.forEach(element => {
        const { dateCreated, message, user={} } = element
        const { userName } = user
        postsHTML.push(<div className="card-pub-post-comments-content">
        <div className="card-pub-post-comment">{message}</div>
        <div className="card-pub-post-comment-subtitle">posted on: {dateCreated}</div>
        <div className="card-pub-post-comment-subtitle">by: {userName}</div></div>
        )
        
      })
    }
    return <div>{postsHTML}</div>
  }
  
  return (
    <div className="card-pub-post-comments" style={{ width: width ? width : '100%' }}>
      {showComments()}
    </div>
  );
}



export default CardPubPostComments;