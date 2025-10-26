import React, { useState } from "react";
const BindComponent = () => {
  const [inputVal, setInputVal] = useState<string>("");
  const [password, setPassword] = useState("");
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("form submitted", inputVal);
    console.log("submitting password", password);
  };
  const handleType = (e: any) => {
    setInputVal(e.target.value);
    console.log("type character", e.target.value);
  };
  const handlePasword = (e: any) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="enter your value"
        value={inputVal}
        onChange={handleType}
      />
      <input
        type="password"
        placeholder="enter your  password"
        value={password}
        onChange={handlePasword}
      />
      <button>submit</button>
      </form>
    </div>
  );
};

export default BindComponent;
