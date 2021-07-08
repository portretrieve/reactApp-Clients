import React from "react";
import { Link } from "react-router-dom";

function StreamCreate() {
  return (
    <div>
      This is StreamCreate Component.
      <br />
      <br />
      <Link to="/">StreamList</Link>
      <br />
      <Link to="/streams/show">StreamShow</Link>
      <br />
      <Link to="/streams/edit">StreamEdit</Link>
      <br />
      <Link to="/streams/delete">StreamDelete</Link>
    </div>
  );
}

export default StreamCreate;
