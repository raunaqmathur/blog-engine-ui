import React from 'react'
import './Posts.css'
import CardPost from '../../components/UI/CardPost/CardPost';
import BlogPost from '../../components/BlogPost/BlogPost';
import SideNav from '../../components/SideNav/SideNav';

const Posts = (props) => {
  return (
    <>
      <section className="section">
        <BlogPost />
        <SideNav />
      </section>
    </>
  );
}
export default Posts;