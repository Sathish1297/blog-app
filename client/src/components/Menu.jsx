import React, { useEffect, useState } from 'react'
// import { posts } from '../constants/data'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Menu({cat}) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const res = await axios.get(`/posts/?cat=${cat}`)
        setPosts(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData();
  },[cat]);

  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post) => (
            <div className='post' key={post.id}>
                <img src={`../upload/${post?.img}`}></img>
                <h2>{post.title}</h2>
                <Link className='link' to={`/post/${post.id}`}>
                  <button>Read more</button>
                </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu