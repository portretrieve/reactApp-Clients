import React from "react";
import { Link } from "react-router-dom";

function StreamList() {
  return (
    <div>
      This is StreamList Component.
      <br />
      <br />
      <Link to="/streams/show">StreamShow</Link>
      <br />
      <Link to="/streams/create">StreamCreate</Link>
      <br />
      <Link to="/streams/edit">StreamEdit</Link>
      <br />
      <Link to="/streams/delete">StreamDelete</Link>
    </div>
  );
}

export default StreamList;
