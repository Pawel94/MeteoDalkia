import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";

import { Redirect } from "react-router-dom";
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div
        className="container"
        style={{
          marginTop: "5%",
          backgroundColor: "#f1f1f1",
          border: "15px",
          border: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
      >
        <form
          className=""
          onSubmit={this.handleSubmit}
          style={{ paddingLeft: "1%", paddingRight: "1%" }}
        >
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn black lighten-1 z-depth-0">
              {" "}
              <i class="material-icons right">keyboard_return</i> Login
            </button>
            <div className="center red-text">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    signIn: (creds) => dispach(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(SignIn);
