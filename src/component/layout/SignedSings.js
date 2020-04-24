import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

import { signOut } from "../../store/actions/authActions";
const SignedSings = (props) => {
  return (
    <div>
      <ul className="right">
        <li>
          <NavLink to="/createProject">Nowy Projekt</NavLink>
        </li>
        <li>
          <a onClick={props.signOut}>Log Out </a>
        </li>

        <li>
          {" "}
          <NavLink to="/" className="btn btn-floating pink lighten-1">
            {props.profile.initials}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

const mapDispachToProps = (dispach) => {
  return {
    signOut: () => dispach(signOut()),
  };
};
export default connect(null, mapDispachToProps)(SignedSings);
