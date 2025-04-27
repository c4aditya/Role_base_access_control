import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3300/api/v1/allPost');
        setPosts(response.data.data || []);
      } catch (error) {
        alert('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
        <div className='user'>

      <h2>User Dashboard</h2>
      <h3> Our Posts</h3>
      <div className='posts'>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div className='single-posts' key={post._id}>
            <p className='heading'>{post.title}</p>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
      </div>
    </div>
    </div>
  );
}

export default User;
