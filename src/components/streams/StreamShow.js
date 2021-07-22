import React from "react";
import Navbar from "./Navbar";
import flv from "flv.js";
import { connect } from "react-redux";
import { fetchStream_AC } from "../../actions";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream_AC(id);
    this.createPlayer();
  }

  componentDidUpdate() {
    this.createPlayer();
  }

  componentWillUnmount() {
    console.log("unmounted");
    this.player.destroy();
  }

  createPlayer() {
    const { id } = this.props.match.params;
    if (this.player || !this.props.stream) {
      return;
    }

    this.player = flv.createPlayer({
      type: "flv",
      url: "http://localhost:8000/live/" + id + ".flv"
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Navbar title={"Show"}></Navbar>
        <video ref={this.videoRef} style={{ width: "60vw" }} controls />
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
