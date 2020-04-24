import React from "react";
import ProjectSummary from "./ProjectListSummary";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectList = (props) => {
  const { excel_data_base } = props;

  return (
    <div className="project-list section">
      {excel_data_base &&
        excel_data_base.map((projects) => {
          return (
            <Link
              to={{
                pathname: "project/" + projects.id,
                aboutprops: projects.project,
              }}
            >
              <ProjectSummary dane={projects} key={projects.id} />
            </Link>
          );
        })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tempData: state.firestore.ordered.excel_temp,
    excel_data_base: state.firestore.ordered.excel_data_base,
    notifications: state.firestore.ordered.excel,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "excel", limit: 3 },
    { collection: "excel_data_base", limit: 3, orderBy: ["created", "desc"] },
  ])
)(ProjectList);
