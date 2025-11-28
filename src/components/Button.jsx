import React from "react";
import { useNavigate } from "react-router-dom";
// import {}

function Button() {
  const navigate = useNavigate();
  return (
    <button className="btn btn-meals"  onClick={() => navigate(-1)}>
      Go back
    </button>
  );
}

export default Button;
