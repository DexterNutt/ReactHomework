import React from "react";

export const Posts = ({ postList }) => {
  return (
    <div id="posts">
      {postList.length > 0 ? (
        <table border={1}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {postList.map((post) => {
              return (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h3>...</h3>
      )}
    </div>
  );
};
