import React from 'react'
import Logo from '../../Logo/Logo'
import HeaderNav from '../../HeaderNav/HeaderNav';
import './CardBlogs.css'

const CardBlogs = (props) => {
  const { width, blogs } = props
  
  const showBlogs = () => {
    console.log("inside showBlogs", blogs)
    const blogsHTML = []
    if(blogs && blogs.length > 0) {
      console.log("before hi")
      blogs.forEach(element => {
        const {name} = element
        blogsHTML.push(<div><a  href= "#" className="blogs-data">{name}</a></div>)
      })
    }
    return <div>{blogsHTML}</div>
  }
  
  return (
    <div className="card-blogs" style={{ width: width ? width : '100%' }}>
      {showBlogs()}
      {/* <Logo name="Blog Engine" /> */}
      {/* <HeaderNav /> */}
    </div>
  );
}



export default CardBlogs;