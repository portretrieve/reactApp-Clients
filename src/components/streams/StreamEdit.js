import React from "react";
import { Link } from "react-router-dom";

function StreamEdit() {
  return (
    <div>
      This is StreamEdit Component.
      <br />
      <br />
      <Link to="/">StreamList</Link>
      <br />
      <Link to="/streams/show">StreamShow</Link>
      <br />
      <Link to="/streams/create">StreamCreate</Link>
      <br />
      <Link to="/streams/delete">StreamDelete</Link>
    </div>
  );
}

export default StreamEdit;
