import { useState, useEffect } from "react";
import { Input } from "./Input";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");

  useEffect(() => {
    console.log("Username", username);
    console.log("Password", password);
  }, [username, password]);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(event) {
    event.preventDefault();
    alert(`Username:${username}\nPassword:${password}`);
  }

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Input
          type="text"
          placeholder={"Enter Username"}
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
        />
        <Input
          type={inputType} // <- exists in the state as Password
          placeholder={"Enter Password"}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          setToggle={() => {
            handleInputChange();
          }}
        />
      </form>
      <button onClick={showValues}>Show values</button>
    </div>
  );
};
