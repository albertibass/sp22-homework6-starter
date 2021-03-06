import { useState } from "react";
import axios from "axios";

const Comment = (postId) => {
  const [comment, setComment] = useState();

  const data = {
    comment: comment,
  };

  const onSubmit = () => {
    axios
      .post(`http://localhost:3002/post/${postId}/comment`, data)
      // No .then because POST /post does not return a body.
      .catch(console.log);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="ID"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button style={{ marginTop: "4px" }} onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Comment;
