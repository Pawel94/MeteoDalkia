import React from "react";
import moment from "moment";

const ProjectListSummary = (project) => {
  console.log("projekt tutaj");
  console.log(project.dane);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content black-text text-darken-3">
        <span className="card-title center-align ">Projekt</span>
        <p>AUTOR:{project.dane.author}</p>
        <p className="grey-text">
          STWORZONE:
          {moment(project.dane.created.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default ProjectListSummary;
