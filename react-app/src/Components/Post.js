import Comments from './Comments';

const Post = ({ title, body, id }) => {
  return (
    <div style={{ textAlign: "left", marginBottom: "12px" }}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Comments comments={id} />
    </div>
  );
};

export default Post;
