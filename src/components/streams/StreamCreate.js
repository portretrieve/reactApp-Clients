import React from "react";
import Navbar from "./Navbar";
import { addStream_AC } from "../../actions";
import { connect } from "react-redux";
import StreamForm from "./StreamForm";
class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.addStream_AC(formValues);
  };

  render() {
    return (
      <div>
        <Navbar title={"Create"}></Navbar>
        <StreamForm onSubmit={this.onSubmit}></StreamForm>
      </div>
    );
  }
}

export default connect(null, { addStream_AC })(StreamCreate);
