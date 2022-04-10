import React from "react";
import Post from "./Post";
import NewPost from "./NewPost";
import { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState([]);

  const getAndSetPostsData = () => {
    axios
      .get("http://localhost:3002/posts")
      .then((data) => setData(data.data))
      .catch(console.log);
  };

  useEffect(() => getAndSetPostsData(), []);

  return (
    <div style={{ maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
      {data.map((d) => (
        <Post title={d.title} body={d.body} key={d.id} />
      ))}
      <NewPost />
    </div>
  );
};

export default Feed;
