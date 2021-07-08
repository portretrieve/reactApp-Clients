import React from "react";

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "171373461118-t43orsco1ti6k4c2rht4p4c5m7rlrao2.apps.googleusercontent.com",
          scope: "email"
        })
        .then(() => {
          console.log(this.auth);
          this.auth = window.gapi.auth2.getAuthInstance();
          console.log(this.auth);

          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(() => {
            this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          });
        });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    }
    if (this.state.isSignedIn) {
      return <div>I am signed in</div>;
    }
    if (!this.state.isSignedIn) {
      return <div>I am not signed in</div>;
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
