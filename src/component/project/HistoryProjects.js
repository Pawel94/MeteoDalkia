import React, { Component } from "react";
import ProjectList from "../project/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class HistoryProject extends Component {
  render() {
    const { excel_data_base } = this.props;
    //  if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m12">
            <ProjectList projects={excel_data_base} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects,
    excel_data_base: state.firestore.ordered.excel_data_base,
    notifications: state.firestore.ordered.excel,
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "excel", limit: 3 },
    { collection: "excel_data_base", limit: 3 },
  ])
)(HistoryProject);
