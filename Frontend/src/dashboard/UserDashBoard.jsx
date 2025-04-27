import React, { useState, useEffect } from 'react';
import axios from 'axios';

function User() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3300/api/v1/posts');
        setPosts(response.data);
      } catch (error) {
        alert('Failed to fetch posts');
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      <h3>Posts</h3>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id}>
            <p>{post.content}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default User;
