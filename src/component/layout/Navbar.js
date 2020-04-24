import React from "react";
import { Link } from "react-router-dom";
import SignedSings from "./SignedSings";

import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";
const Navbar = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? (
    <SignedSings profile={profile} />
  ) : (
    <SignedOutLinks />
  );
  return (
    <div>
      <nav
        style={{
          color: "blue",
          backgroundColor: "black",
          paddingLeft: "5%",
          paddingRight: "5%",
        }}
      >
        <div>
          <Link to="/" className="brand-logo">
            CalcDalkia
          </Link>
          {auth.isLoaded && links}
        </div>
      </nav>
      <div
        style={{
          color: "",
          backgroundColor: "black",
          position: "fixed",
          bottom: "0",
          width: "100%",
          height: "2%",
          zIndex: "-1",
        }}
      ></div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbar);
