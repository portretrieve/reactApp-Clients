import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchStreams_AC } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams_AC();
  }

  renderDeleteandEditButtons = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated content">
          <button className="ui button primary">Edit</button>
          <button className="ui button negative">Delete</button>
        </div>
      );
    }
  };

  renderList = () => {
    return this.props.streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {this.renderDeleteandEditButtons(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            {stream.title}
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  renderCreateButton = () => {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar title={"List"}></Navbar>
        <h3>Streams</h3>
        <div className="ui celled list">{this.renderList()}</div>
        <div className="ui celled list">{this.renderCreateButton()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.signInStatus
  };
};

export default connect(mapStateToProps, { fetchStreams_AC })(StreamList);
