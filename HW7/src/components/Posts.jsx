import { useState, useEffect } from "react";
import { Link, json, redirect } from "react-router-dom";
import { NewPost } from "./NewPost";
import axios from "axios";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [addingNewPost, setAddingNewPost] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  const deletePost = async (postId) => {
    const deletedItem = await axios.delete(
      "https://jsonplaceholder.typicode.com/posts/" + postId
    );
    alert(deletedItem.status);
    setPosts([...posts.filter((post) => post.id !== postId)]);
  };

  //* New Post
  const addPost = async (newPost) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newPost
      );
      alert(response.status);
      const data = response.data;
      setPosts([...posts, data]);
    } catch (err) {
      console.error("Error adding post:", err);
    }
    setAddingNewPost(!addingNewPost);
  };

  //! Post Details
  //! New btn edit post (Edit title / Edit Body)
  //* use HTTP (PUT) in axios . put / patch
  //? use .then or the (res) to output an alert (200) redirect to All posts / or alert the error

  //! Add LOADING while executing the funcs

  return (
    <div id="posts">
      {addingNewPost ? (
        <NewPost
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
          addPost={addPost}
        />
      ) : (
        <button
          onClick={() => {
            setAddingNewPost(!addingNewPost);
          }}
        >
          Add New Post
        </button>
      )}
      <br />
      <br />
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>
                  {post.body.substring(0, 100)}...
                  <Link to={`/post/${post.id}`}>Show More</Link>
                </td>
                <td>
                  <button onClick={() => deletePost(post.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
