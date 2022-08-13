import React from "react";
import { Link } from "react-router-dom";
import "./BlogList.scss";
import axios from "axios";

const BlogList = ({ data, heading, setData }) => {
  const handleClick = async (id) => {
    await axios.delete(
      `https://61294559068adf001789b85c.mockapi.io/api/blog/${id}`
    );
    setData(data.filter((p) => p.id !== id));
    console.log(data);
  };

  return (
    <div className="blog__list">
      <h2>{heading}</h2>
      {data.map((blog) => (
        <div className="blog__list__preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written byt {blog.author}</p>
          </Link>
          <button onClick={() => handleClick(blog.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
