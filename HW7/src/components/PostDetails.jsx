import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Comments } from "./Comments";

export const PostDetails = () => {
  const [details, setDetails] = useState({});
  const [detailsEdit, setDetailsEdit] = useState({});
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

  const editPost = () => {
    setEditingPost(true);
    setDetailsEdit(details);
  };

  const savePost = async () => {
    const editedItem = await axios
      .patch("https://jsonplaceholder.typicode.com/posts/" + postId, {
        title: detailsEdit.title,
        body: detailsEdit.body,
      })
      .catch((err) => alert(err.message));
    setEditingPost(false);
    setDetails(editedItem.data);
    setDetailsEdit({});
    alert(editedItem.status);
  };

  return (
    <div id="post-details">
      {editingPost ? (
        <>
          <input
            type={detailsEdit.title}
            value={detailsEdit.title}
            onChange={(e) => {
              setDetailsEdit({ ...detailsEdit, title: e.target.value });
            }}
          />
          <br />
          <br />
          <textarea
            rows={10}
            cols={20}
            value={detailsEdit.body}
            onChange={(e) => {
              setDetailsEdit({ ...detailsEdit, body: e.target.value });
            }}
          />
          <br />
          <br />
          <button onClick={savePost}>Save</button>
          <br />
          <br />
          <button
            onClick={() => {
              setEditingPost(false);
            }}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <h2>{details.title}</h2>
          <p>{details.body}</p>
          <button onClick={editPost}>Edit</button>
        </>
      )}
      <br />
      <br />
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
