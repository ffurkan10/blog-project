import React, { useState } from "react";
import "./create.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [author, setAuthor] = useState("fatih");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, detail, author };

    setIsPending(true);

    const response = axios.post(
      `https://61294559068adf001789b85c.mockapi.io/api/blog`,
      blog
    );
    console.log(response);
    setIsPending(false);
    history.push("/");
  };

  return (
    <div className="create">
      <h1>Add The New Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Blog title:</label>
        <input
          name="title"
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="detail">Blog body:</label>
        <textarea
          name="detail"
          required
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>

        <label htmlFor="author">Blog author:</label>
        <input
          name="author"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding blog...</button>}
      </form>
    </div>
  );
};

export default Create;
