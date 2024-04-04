export const NewPost = ({
  postBody,
  postTitle,
  setPostBody,
  setPostTitle,
  addPost,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title: postTitle, body: postBody });
    setPostTitle("");
    setPostBody("");
  };

  return (
    <div id="new-post">
      <p>Post Title</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Something on your mind?"
          id="post-title"
          value={postTitle}
          onChange={(e) => {
            setPostTitle(e.target.value);
          }}
        />
        <br />
        <p>Post body</p>
        <input
          type="text"
          placeholder="Write a comment about it?"
          id="post-body"
          value={postBody}
          onChange={(e) => {
            setPostBody(e.target.value);
          }}
        />
        <br />
        <br />
        <button type="submit">Submit Post</button>
      </form>
    </div>
  );
};
