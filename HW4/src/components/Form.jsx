import { useState } from "react";
import "./FormStyle.css";

export const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showTable, setShowTable] = useState("");

  return (
    <div id="sign-up-form">
      <input
        type={"text"}
        placeholder={"Enter your Username"}
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />

      <input
        type={"password"}
        placeholder={"Enter your Password"}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <input
        type={"text"}
        placeholder={"Enter your Name"}
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />

      <input
        type={"text"}
        placeholder={"Enter your Surname"}
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />

      <input
        type={"email"}
        placeholder={"Enter your e-mail"}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setShowTable(!showTable);
        }}
      >
        {showTable ? "Hide Table" : "Show Values"}
      </button>

      {showTable && (
        <table border={1}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Name</th>
              <th>Surname</th>
              <th>e-mail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{username}</td>
              <td>{password}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};
