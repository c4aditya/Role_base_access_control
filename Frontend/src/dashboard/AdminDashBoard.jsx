import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Admin() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');

  // Fetch all posts (with credentials)
  const fetchPosts = async () => {
    try {
      const response = await axios.get('http://localhost:3300/api/v1/getAllPosts', {
        withCredentials: true,
      });
      setPosts(response.data.data || []);
    } catch (error) {
      toast.error('Failed to fetch posts');
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Create a new post
  const createPost = async () => {
    if (!newTitle || !newDescription) {
      toast.warn('Please fill both title and description');
      return;
    }
    try {
      await axios.post(
        'http://localhost:3300/api/v1/createPost',
        { title: newTitle, description: newDescription },
        { withCredentials: true }
      );
      setNewTitle('');
      setNewDescription('');
      fetchPosts();
      toast.success('Post created successfully!');
    } catch (error) {
      toast.error('Failed to create post');
    }
  };

  // Delete post
  const deletePost = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      await axios.delete(`http://localhost:3300/api/v1/deletePost/${id}`, {
        withCredentials: true,
      });
      fetchPosts();
      toast.success('Post deleted successfully!');
    } catch (error) {
      toast.error('Failed to delete post');
    }
  };

  // Start editing post
  const startEdit = (post) => {
    setEditId(post._id);
    setEditTitle(post.title);
    setEditDescription(post.description);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditId(null);
    setEditTitle('');
    setEditDescription('');
  };

  // Update post
  const updatePost = async () => {
    if (!editTitle || !editDescription) {
      toast.warn('Please fill both title and description');
      return;
    }
    try {
      await axios.put(
        `http://localhost:3300/api/v1/updatePost/${editId}`,
        { title: editTitle, description: editDescription },
        { withCredentials: true }
      );
      setEditId(null);
      setEditTitle('');
      setEditDescription('');
      fetchPosts();
      toast.success('Post updated successfully!');
    } catch (error) {
      toast.error('Failed to update post');
    }
  };

  return (
    <div className='admin-dashboard'>
      <ToastContainer position="top-right" autoClose={2000} />
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
            {editId === post._id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                  style={{ marginRight: 10 }}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button onClick={updatePost}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <button onClick={() => startEdit(post)}>Edit</button>
                <button onClick={() => deletePost(post._id)} style={{ marginLeft: 8 }}>Delete</button>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default Admin;
