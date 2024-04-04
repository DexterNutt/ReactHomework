import { useState, useEffect, useTransition } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comments } from "./Comments";

export const PostDetails = () => {
  const [details, setDetails] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);
  const [editingPost, setEditingPost] = useState(false);
  let { postId } = useParams();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId)
      .then((res) => setDetails(res.data))
      .catch((err) => alert(err));
  }, []);

  const loadComments = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + postId + "/comments")
      .then((res) => setComments(res.data))
      .catch((err) => alert(err.message));
  };

  return (
    <div id="post-details">
      <h2>{details.title}</h2>
      <p>{details.body}</p>

      {editingPost ? (
        <button
          onClick={() => {
            setEditingPost(!editingPost);
          }}
        >
          Edit Post
        </button>
      ) : (
        <form onSubmit="{funcToHandleThePatch OR PUT}">
          <input
            type="text"
            id="edit-title"
            placeholder={details.title}
            onChange={() => {
              setDetails;
            }}
          />
          <input
            type="text"
            id="edit-body"
            placeholder={details.body}
            onChange={() => {
              setDetails;
            }}
          />
          br
        </form>
      )}

      <Comments
        loadComments={loadComments}
        comments={comments}
        setShowComments={() => {
          setShowComments(!showComments);
        }}
        showComments={showComments}
      />
    </div>
  );
};
