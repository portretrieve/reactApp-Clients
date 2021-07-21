import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchStream_AC } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream_AC(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <Navbar title={"Show"}></Navbar>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream_AC })(StreamShow);
