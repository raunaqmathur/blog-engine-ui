import React, {useEffect, useState} from 'react';
import './SideNav.css'
import CardBlogs from '../UI/CardBlogs/CardBlogs';

const SideNav = (props) => {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/blogs', {
      method: 'get',
      headers: {'Content-Type':'application/json'}
     }) .then(res => res.json())
        .then((data) => {
          console.log("data", data)
          setBlogs(data)
          console.log("blogs", blogs)
        })
        .catch(console.log)
  }, []);
  console.log("blogs1", blogs)

  return (
    <CardBlogs width="27%" blogs={blogs}></CardBlogs>
  );
}
export default SideNav;