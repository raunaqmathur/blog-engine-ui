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
        
        postsHTML.push(<div><a href={`/${link}?id=${id}`} className="post-data">{title}</a><div className="post-data">{datePublished}</div>
        <div className="post-data">{message}</div></div>)
        
      })
    }
    return <div>{postsHTML}</div>
  }
  
  return (
    <div className="card-post" style={{ width: width ? width : '100%' }}>
      {showPost()}
      {/* <Logo name="Blog Engine" /> */}
      {/* <HeaderNav /> */}
    </div>
  );
}



export default CardPost;