import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  state = { signInStatus: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "171373461118-t43orsco1ti6k4c2rht4p4c5m7rlrao2.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ signInStatus: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (signInStatus) => {
    if (signInStatus) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.state.signInStatus === null) {
      return null;
    }
    if (this.state.signInStatus) {
      return (
        <button
          className="ui red google button"
          onClick={() => {
            this.auth.signOut();
          }}
        >
          <i className="google icon"></i>Sign Out
        </button>
      );
    }
    if (!this.state.signInStatus) {
      return (
        <button
          className="ui red google button"
          onClick={() => {
            this.auth.signIn();
          }}
        >
          <i className="google icon"></i>Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
