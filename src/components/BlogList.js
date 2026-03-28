
import React from "react";
import BlogCard from ".component/BlogCard.js";
import { getBlogs } from "../data/BlogData";

function BlogList() {
  const blogs = getBlogs(); 

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}
    >
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          description={blog.description}
        />
      ))}
    </div>
  );
}

export default BlogList;