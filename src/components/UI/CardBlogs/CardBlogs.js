import React from 'react'
import Logo from '../../Logo/Logo'
import HeaderNav from '../../HeaderNav/HeaderNav';
import './CardBlogs.css'

const CardBlogs = (props) => {
  const { width, blogs } = props
  
  const showBlogs = () => {
    const blogsHTML = []
    if(blogs && blogs.length > 0) {
      blogs.forEach(element => {
        const {name, userResponse ={}} = element
        const { userName } = userResponse
        blogsHTML.push(<div className="blogs-content"><a  href={`/otherblog?userName=${userName}`} className="blogs-data">{name}</a></div>)
      })
    }
    return <div className="blogs-container">{blogsHTML}</div>
  }
  
  return (
    <div className="card-blogs" style={{ width: width ? width : '100%' }}>
      {showBlogs()}
    </div>
  );
}



export default CardBlogs;