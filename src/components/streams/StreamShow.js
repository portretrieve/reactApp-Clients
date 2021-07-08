import React from "react";
import { Link } from "react-router-dom";

function StreamShow() {
  return (
    <div>
      This is StreamShow Component.
      <br />
      <br />
      <Link to="/">StreamList</Link>
      <br />
      <Link to="/streams/create">StreamCreate</Link>
      <br />
      <Link to="/streams/edit">StreamEdit</Link>
      <br />
      <Link to="/streams/delete">StreamDelete</Link>
    </div>
  );
}

export default StreamShow;
