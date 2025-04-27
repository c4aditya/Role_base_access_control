import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');

  // Fetch all posts (with credentials)
//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get('http://localhost:3300/api/v1/getAllPosts', {
//         withCredentials: true,
//       });
//       setPosts(response.data.data || []);
//     } catch (error) {
//       console.error("Error fetching posts: ", error);
//       alert('Failed to fetch posts');
//     }
//   };

  // Fetch posts when the admin page is loaded
  useEffect(() => {
    // fetchPosts();
  }, []);

  // Create a new post
  const createPost = async () => {
    if (!newTitle || !newDescription) {
      alert('Please fill both title and description');
      return;
    }
    try {
      await axios.post(
        'http://localhost:3300/api/v1/createPost',
        { title: newTitle, description: newDescription },
        { withCredentials: true }
      );
    //   fetchPosts(); // Refresh posts after creating new one
      setNewTitle('');
      setNewDescription('');
    } catch (error) {
      console.log("Error creating post: ", error);
      alert('Failed to create post');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input
        type="text"
        placeholder="Post title"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <input
        type="text"
        placeholder="Post description"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <button onClick={createPost}>Create Post</button>

      <h3>Existing Posts</h3>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} style={{ border: '1px solid #ccc', margin: 10, padding: 10 }}>
            <h4>{post.title}</h4>
            <p>{post.description}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Admin;
