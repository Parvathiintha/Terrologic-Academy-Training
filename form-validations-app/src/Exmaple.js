import React from "react";
import useToggle from "./Task2CustomHooks";

const ToggleExample = () => {
  const { value, toggle } = useToggle(false);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>{value ? " Visible" : " Hidden"}</h2>
      <button onClick={toggle}>Toggle</button>

      {value && <p>This text appears when value is TRUE!</p>}
    </div>
  );
};

export default ToggleExample;
