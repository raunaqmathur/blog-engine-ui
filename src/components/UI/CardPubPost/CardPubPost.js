import React from 'react'
import Logo from '../../Logo/Logo'
import HeaderNav from '../../HeaderNav/HeaderNav';
import './CardPubPost.css'

const CardPubPost = (props) => {
  const { width, post } = props


  const showPost = () => {
    console.log("inside showPubPost", post.userResponse)

    if(post) {
      console.log("before hi")
      const { title, datePublished, message, userResponse={} } = post   
      const { firstName, lastName } = userResponse      

      return <div className="pub-post-content"><div className="pub-post-title">{title}</div>
        <div className="pub-post-description">{message}</div>
        <div className="pub-post-subtitle">{datePublished}</div>
        <div className="pub-post-subtitle">{firstName} {lastName}</div>
        </div>
    }
    return <div>No Post to display</div>
  }
  
  return (
    <div className="card-pub-post" style={{ width: width ? width : '100%' }}>
      {showPost()}
    </div>
  );
}



export default CardPubPost;