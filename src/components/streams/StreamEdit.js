import React from "react";
import Navbar from "./Navbar";
import { connect } from "react-redux";
import { fetchStream_AC, editStream_AC } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream_AC(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.editStream_AC(this.props.match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <Navbar title={"Edit"}></Navbar>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubmit}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream_AC, editStream_AC })(
  StreamEdit
);
