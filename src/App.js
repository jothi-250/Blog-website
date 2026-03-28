import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogCard from "./components/BlogCard";
import BlogDetail from "./pages/BlogDetail";
import CreateBlog from "./pages/CreateBlog";
import blogData from "./data/BlogData"; 

function App() {
  // eslint-disable-next-line no-unused-vars
  const [blogs, setBlogs] = useState([]); 

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ minHeight: "100vh", padding: "30px", background: "transparent", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h1 style={{ marginBottom: "30px", color: "#F5F5F5" }}>Personal Development Zone 📝</h1>
              <div style={{ width: "70%", display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: "20px", rowGap: "30px" }}>
                {/* Old blogs */}
                {blogData.map(blog => (
                  <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} />
                ))}

                {/* Newly added blogs */}
                {blogs.map(blog => (
                  <BlogCard key={blog.id} id={blog.id} title={blog.title} description={blog.description} />
                ))}
              </div>
            </div>
          }
        />

        
        <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />

        
        <Route path="/create-blog" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
    </Router>
  );
}

export default App;