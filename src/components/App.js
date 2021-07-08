import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

export default function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header />
        <br />
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/create" component={StreamCreate} />
        <Route path="/streams/edit" component={StreamEdit}></Route>
        <Route path="/streams/delete" component={StreamDelete}></Route>
      </BrowserRouter>
    </div>
  );
}
