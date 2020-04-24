import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import ExcelSummary from "./ExcelSummary";

import { Component } from "react";

import {
  addToProject,
  addToDataBase,
  changeState,
} from "../../store/actions/projectActions";

export class ExcelDetails extends Component {
  componentDidMount() {
    this.props.changeState();
    console.log("Excel changed state");
  }

  render() {
    const { notifications } = this.props;

    console.log("renderuje");
    return (
      <div>
        {notifications &&
          notifications.map((projects) => {
            return (
              <ExcelSummary
                Row1={projects.Row1}
                object={projects}
                key={notifications.id}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tempData: state.firestore.ordered.excel_temp,
    notifications: state.firestore.ordered.excel2,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToProject: (project) => dispatch(addToProject(project)),
    changeState: () => dispatch(changeState()),
    addToDataBase: (project) => dispatch(addToDataBase(project)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "excel" },
    { collection: "excel_temp" },
    { collection: "excel2" },
  ])
)(ExcelDetails);
