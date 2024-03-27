import { useState, useEffect } from "react";
import { Input } from "./Input";
import { Dropdown } from "./Dropdown";

const elements = [
  { value: "Select", name: "Select desired platform" },
  { value: "Facebook", name: "Facebook" },
  { value: "Instagram", name: "Instagram" },
  { value: "SnapChat", name: "SnapChat" },
];

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [comment, setComment] = useState("");
  const [inputType, setInputType] = useState("password");
  const [textArea, setTextArea] = useState(false);
  const [selectedValue, setSelectedValue] = useState(elements[0].value);

  useEffect(() => {
    const handleKey = (e) => {
      e.preventDefault;
      if (e.key === "ArrowDown") {
        handleInputChange();
      }
    };

    window.addEventListener("keydown", handleKey);
  }, []);

  function handleInputChange() {
    setInputType(inputType === "password" ? "text" : "password");
  }

  function showValues(event) {
    event.preventDefault();
    alert(`Username:${username}\nPassword:${password}`);
  }

  const changeToTextArea = () => {
    setTextArea(!textArea);
  };

  function showComment(event) {
    event.preventDefault();
    alert(`Comment: ${comment}`);
  }

  const handleDropdownChange = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div id="login">
      <form onSubmit={showValues}>
        <Dropdown
          elements={elements}
          selectedValue={selectedValue}
          onChange={handleDropdownChange}
        />
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
          type={inputType}
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
      <br />
      <br />
      {textArea ? (
        <textarea
          rows="4"
          cols="50"
          name="comment"
          setToggle={() => {
            handleInputChange();
          }}
        >
          {comment}
        </textarea>
      ) : (
        <Input
          type="text"
          placeholder={"What's on your mind?"}
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
          name="comment"
          setToggle={() => {
            changeToTextArea();
          }}
        />
      )}
      <br />
      <button onClick={showComment}>Print Comment</button>
    </div>
  );
};
