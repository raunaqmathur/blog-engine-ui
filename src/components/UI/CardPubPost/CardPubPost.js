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

      return <div><div className="pub-post-data">{title}
        <div className="pub-post-data">{message}</div>
        <div className="pub-post-data">{datePublished}</div>
        <div className="pub-post-data">{firstName} {lastName}</div>
        </div>
        </div>
    }
    return <div>No Post to display</div>
  }
  
  return (
    <div className="card-post" style={{ width: width ? width : '100%' }}>
      {showPost()}
      {/* <Logo name="Blog Engine" /> */}
      {/* <HeaderNav /> */}
    </div>
  );
}



export default CardPubPost;