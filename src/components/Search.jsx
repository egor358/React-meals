import React, { useState } from "react";

function Search({ cb = Function.prototype }) {
  const [value, setValue] = useState("");
  const handleSubmit = () => {
    cb(value);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <>
      <input
        value={value}
        onKeyDown={handleKey}
        onChange={(e) => setValue(e.target.value)}
        type="search"
        style={{
          padding: "0px 5px",
          marginRight: "5px",
          fontSize: "18px",
          width: "200px",
          height:'40px',
          borderRadius: "10px",
          border: "2px solid  #000",
        }}
      />
      <button onClick={handleSubmit}
      style={{
        height:'30px'
      }}
      >Search</button>
    </>
  );
}

export default Search;
