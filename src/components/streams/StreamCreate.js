import React from "react";
import { Field, reduxForm } from "redux-form";
import Navbar from "./Navbar";

import { addStream_AC } from "../../actions";
import { connect } from "react-redux";

class StreamCreate extends React.Component {
  renderError = (meta) => {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  };

  renderInput = (formProps) => {
    const { input, label, meta } = formProps;

    const classes = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={classes}>
        <label htmlFor={input.name}>{label}</label>
        <input
          name={input.name}
          id={input.name}
          {...input}
          autoComplete="off"
        />
        {this.renderError(meta)}
      </div>
    );
  };

  onFormSubmission = (formValues) => {
    this.props.addStream_AC(formValues);
  };

  render() {
    return (
      <div>
        <Navbar title={"Create"}></Navbar>
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmission)}
          className="ui form error"
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter The Title"
          ></Field>
          <Field
            name="description"
            component={this.renderInput}
            label="Enter The Description"
          ></Field>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a Title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};

export default connect(null, {
  addStream_AC
})(
  reduxForm({
    form: "streamCreate",
    validate
  })(StreamCreate)
);
