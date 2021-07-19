import React from "react";
import { connect } from "react-redux";
import { userIsSignedIn_AC, userIsSignedOut_AC } from "../actions";

class GoogleAuth extends React.Component {
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
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isUserSignedIn) => {
    if (isUserSignedIn === true) {
      this.props.userIsSignedIn_AC(this.auth.currentUser.get().getId());
    } else {
      this.props.userIsSignedOut_AC();
    }
  };

  renderAuthButton() {
    if (this.props.signInStatus === null) {
      return null;
    }
    if (this.props.signInStatus) {
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
    if (!this.props.signInStatus) {
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
  return { signInStatus: state.auth.signInStatus };
};

export default connect(mapStateToProps, {
  userIsSignedIn_AC,
  userIsSignedOut_AC
})(GoogleAuth);
