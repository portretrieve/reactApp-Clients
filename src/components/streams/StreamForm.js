import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";

class StreamForm extends React.Component {
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
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
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
          <Link className="ui button" to="/">
            Cancel
          </Link>
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

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
