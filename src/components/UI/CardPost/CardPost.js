import React from 'react'
import Logo from '../../Logo/Logo'
import HeaderNav from '../../HeaderNav/HeaderNav';
import './CardPost.css'

const CardPost = (props) => {
  const { link, width, posts } = props


  const showPost = () => {
    console.log("inside showPost", posts)
    const postsHTML = []
    if(posts && posts.length > 0) {
      console.log("before hi")
      posts.forEach(element => {
        const {title, datePublished, message, id} = element
        
        postsHTML.push(<div className="post-content"><a href={`/${link}?id=${id}`} className="post-title">{title}</a><div className="post-subtitle">{datePublished}</div>
        <div className="post-description">{message}</div></div>)
        
      })
    }
    return <div className="post-container">{postsHTML}</div>
  }
  
  return (
    <div className="card-post" style={{ width: width ? width : '100%' }}>
      {showPost()}
    </div>
  );
}



export default CardPost;