import React, { Component } from "react";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  };
  render() {
    const { auth, errorMessage } = this.props;
    if (auth.uid) return <Redirect to="/signin" />;

    return (
      <div
        className="container"
        style={{
          marginTop: "5%",
          backgroundColor: "white",
          border: "15px",
          border: "solid",
          borderColor: "black",
          borderRadius: "5px",
        }}
      >
        <form
          className="white"
          onSubmit={this.handleSubmit}
          style={{ paddingLeft: "1%", paddingRight: "1%" }}
        >
          <h5 className="grey-text text-darken-3">Sign Up</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn black lighten-1 z-depth-0">
              <i class="material-icons right">keyboard_return</i> Sign Up
            </button>
          </div>
          <div className="center red-text">
            {errorMessage ? <p>{errorMessage}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    errorMessage: state.auth.authError,
  };
};

const mapDispachToProps = (dispach) => {
  return {
    signUp: (creds) => dispach(signUp(creds)),
  };
};

export default connect(mapStateToProps, mapDispachToProps)(SignUp);
