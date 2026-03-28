import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { FaPen } from "react-icons/fa";
import blogContent from "../data/BlogContent"; 
import "./BlogDetail.css";

function BlogDetail({ blogs }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const blogId = Number(id);

  
  let blog = blogContent.find(b => b.id === blogId);

  if (!blog) {
    blog = blogs.find(b => b.id === blogId);
  }

  if (!blog) return <p>Blog not found</p>;

  const handlePostClick = () => {
    navigate("/create-blog");
  };

  return (
    <div className="blog-detail-container">
      <h1>{blog.title}</h1>
      <p className="blog-author-date">
        By {blog.author || "Unknown"} | {blog.date || "N/A"}
      </p>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
      <Button icon={<FaPen />} onClick={handlePostClick}>
        Now post your thoughts
      </Button>
    </div>
  );
}

export default BlogDetail;