import React from "react";
import ProjectSummary from "./ProjectListSummary";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import ProjectDetails from "./ProjectDetails";
import Button from "@material-ui/core/Button";
import Workbook from "react-excel-workbook";
import MaterialTable from "material-table";

import SaveIcon from "@material-ui/icons/Save";
const CreateExcelFile = (props) => {
  // const { excel_data_base } = props;

  return (
    <Workbook
      filename="Dalkia dane.xlsx"
      element={
        <Button
          variant="contained"
          color="primary"
          startIcon={<SaveIcon />}
          style={{ width: "100%" }}
        >
          ZAPISZ DANE!
        </Button>
      }
    >
      <Workbook.Sheet data={props.dataToSave} name="Dane">
        <Workbook.Column label="Data" value="data" />
        <Workbook.Column label="temp_z" value="temp_z" />
        <Workbook.Column label="Vw" value="Vw" />
        <Workbook.Column label="zach" value="zach" />
      </Workbook.Sheet>
    </Workbook>
  );
};

export default CreateExcelFile;
