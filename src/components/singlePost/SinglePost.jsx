export default function SinglePost({ post }) {
  const style = {
    width: "150px",
    padding: "8px",
    border: "1px solid black",
    borderRadius: "8px",
    backgroundColor: "blue",
    color: "white",
  };

  return (
    <div style={style}>
      <p style={{ fontWeight: 700 }}>{post.title}</p>
      <p style={{ fontSize: "12px" }}>{post.body}</p>
    </div>
  );
}
