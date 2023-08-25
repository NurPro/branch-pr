import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  function changeHandler(e) {
    setValue(e.target.value);
  }

  function navigatePage() {
    const regex = /[0-9]{0-6}/;
    if (value.length > 0) {
      
      navigate("/secondPage");
    }
  }

  return (
    <from>
      <input type="text" value={value} onChange={changeHandler} />
      <button onClick={navigatePage}>add</button>
    </from>
  );
};
