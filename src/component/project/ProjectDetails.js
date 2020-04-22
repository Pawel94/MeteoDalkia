import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { deleteProject } from "../../store/actions/projectActions";

import DynamicSort from "./DynamicSort";

import CreateExcelFile from "./CreateExcelFile";
import MaterialTable from "material-table";
import { Redirect } from "react-router-dom";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  let tableAdded = [];
  const { aboutprops } = props.location;
  const { project, auth } = props;

  const columns = [
    { title: "Data", field: "data", defaultSort: "asc" },
    { title: "Temperatura zewnetrzna", field: "temp_z" },
    { title: "Vw", field: "Vw" },
    { title: "Zachmurzenie", field: "zach" },
  ];

  const [state] = React.useState({
    rowsTemp: [aboutprops],
  });

  const table = state.rowsTemp[0];

  for (var property in table) {
    if (property !== "id") {
      tableAdded.push(table[property]);
    }
  }

  const dataToTable = tableAdded.map((o) => ({ ...o }));

  const dataToSave = dataToTable.slice().sort();
  dataToSave.sort(DynamicSort("data"));

  const deleteClick = () => {
    props.deleteProject(id);
    props.history.push("/history");
  };

  if (!auth.uid) return <Redirect to="/signin" />;
  if (project) {
    return (
      <div className="container section project-details">
        <MaterialTable
          title="Dalkia tablea"
          options={{
            sort: true,
          }}
          columns={columns}
          data={dataToTable}
        />
        <div class="row" style={{ paddingTop: "2%" }}>
          <div class="col s6">
            <button
              className="btn black"
              style={{ width: "100%" }}
              onClick={deleteClick}
            >
              Usuń dane
            </button>
          </div>
          <div class="col s6">
            <CreateExcelFile dataToSave={dataToSave} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>BRAK TAKICH DANYCH ....</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const excel_data_base = state.firestore.data.excel_data_base;

  const project = excel_data_base ? excel_data_base[id] : null;
  return {
    project: project,
    auth: state.firebase.auth,
    excel_data_base: state.firestore.data.excel_data_base,
  };
};

const mapDispachToProps = (dispatch, ownProps) => {
  return {
    deleteProject: (project_id) => dispatch(deleteProject(project_id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispachToProps),
  firestoreConnect([
    { collection: "projects" },
    { collection: "excel_data_base", limit: 3 },
  ])
)(ProjectDetails);
