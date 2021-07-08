import React from "react";
import { Link } from "react-router-dom";

function StreamDelete() {
  return (
    <div>
      This is Delete Component.
      <br />
      <br />
      <Link to="/">StreamList</Link>
      <br />
      <Link to="/streams/show">StreamShow</Link>
      <br />
      <Link to="/streams/create">StreamCreate</Link>
      <br />
      <Link to="/streams/edit">StreamEdit</Link>
      <br />
    </div>
  );
}

export default StreamDelete;
