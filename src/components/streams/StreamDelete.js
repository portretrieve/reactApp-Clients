import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream_AC, deleteStream_AC } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream_AC(this.props.match.params.id);
  }

  renderCancelAndDeleteButtons = () => {
    const id = this.props.match.params.id;
    return (
      <React.Fragment>
        <button
          onClick={() => {
            this.props.deleteStream_AC(id);
          }}
          className="ui negative button"
        >
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  renderStreamContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete : Loading Stream Name...";
    }
    return (
      <div>
        Are you sure you want to delete the following stream:
        <hr />
        <div className="item">
          <div className="content">
            <strong>Stream Title: &nbsp; </strong>
            {this.props.stream.title}
            <div className="description">
              <strong>Stream Description: &nbsp;</strong>
              {this.props.stream.description}
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    console.log(this.props);

    return (
      <Modal
        title="Delete Stream"
        content={this.renderStreamContent()}
        actions={this.renderCancelAndDeleteButtons()}
        onDisMiss={() => history.push("/")}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream_AC, deleteStream_AC })(
  StreamDelete
);
