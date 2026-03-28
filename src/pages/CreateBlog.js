import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateBlog.css";

function CreateBlog({ blogs, setBlogs }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      description,
      content,
    };

    setBlogs([...blogs, newBlog]);

   
    setTitle("");
    setDescription("");
    setContent("");

    
    navigate("/");
  };

  
  const handleDelete = () => {
    setTitle("");
    setDescription("");
    setContent("");
  };

  return (
    <div className="create-container">
      <h2>Create Your Blog ✍️</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <textarea
          placeholder="Write your content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="button-group">
          <button type="submit" className="submit-btn">
            Submit
          </button>

          <button
            type="button"
            className="delete-btn"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;