import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./BlogDetails.scss";

const BlogDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://61294559068adf001789b85c.mockapi.io/api/blog/${id}`)
      .then((res) => {
        setData(res.data);
      });
  }, [id]);
  console.log(data);

  return (
    <div className="blog__details">
      <h2>Blog Details - {id}</h2>
      <div className="blog__details__main">
        <h4>Written byt {data.author}</h4>
        <p>{data.detail}</p>
        <img src={data.image} alt="" />
      </div>
    </div>
  );
};

export default BlogDetails;
