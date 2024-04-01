import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div id="not-found">
      <h1>ERROR 404!</h1>
      <h2>
        Go <Link to="/">Back</Link> to homepage
      </h2>
    </div>
  );
};
