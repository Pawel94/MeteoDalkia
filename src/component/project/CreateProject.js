import React, { Component } from "react";

import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import {
  addToProject,
  addTempData,
  deleteLastProject,
} from "../../store/actions/projectActions";
import axios from "axios";

import { Redirect } from "react-router-dom";

import AddProject from "./AddProject";

class CreateProject extends Component {
  componentDidUpdate() {
    const { dane } = this.props;
    console.log(dane);
    if (dane == true) {
      setTimeout(
        function () {
          this.props.history.push("/excelDetails");
        }.bind(this),
        8000
      );
    }
  }

  state = {
    Row3: {},

    Row1: {},
  };
  getDate = (s) => {
    var data = new Date();
    var today =
      data.getDate() + "." + data.getMonth() + "." + data.getFullYear();
    var nextDay =
      data.getDate() + 1 + "." + data.getMonth() + "." + data.getFullYear();
    var nextNextDay =
      data.getDate() + 2 + "." + data.getMonth() + "." + data.getFullYear();

    var thirdDate =
      data.getDate() + 3 + "." + data.getMonth() + "." + data.getFullYear();

    var fourthday =
      data.getDate() + 4 + "." + data.getMonth() + "." + data.getFullYear();
    if (s === "Row1") {
      return today + " 12:00";
    }
    if (s === "Row4") {
      return today + " 15:00";
    }
    if (s === "Row19") {
      return nextDay + " 06:00";
    }
    if (s === "Row28") {
      return nextDay + " 15:00";
    }
    if (s === "Row43") {
      return nextNextDay + " 06:00";
    }
    if (s === "Row52") {
      return nextNextDay + " 15:00";
    }
    if (s === "Row67") {
      return thirdDate + " 06:00";
    }
    if (s === "Row76") {
      return thirdDate + " 15:00";
    }
    if (s === "Row85") {
      return fourthday + " 00:00";
    }
  };

  handleChange = (e) => {
    var data = new Date();
    var dataa = this.getDate(e.target.name);
    this.setState({
      ...this.state,
      Row3: {
        ...this.state.Row3,
        [e.target.id]: e.target.value,
        data: dataa,
      },
      [e.target.name]: {
        ...this.state.Row3,
        [e.target.id]: e.target.value,
      },
    });

    this.setState({});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.deleteLastProject();
    this.props.addToProject(this.state);
    this.props.addTempData(this.state);

    // console.log("this.props.addToProject(this.state)");
    // console.log();
    // axios.post("https://us-central1-meteo-3323f.cloudfunctions.net/addItem", {
    //   item: this.state.Row1,
    // });
  };

  render() {
    const { auth } = this.props;
    var dataa = new Date();
    var today =
      dataa.getDate() + "." + dataa.getMonth() + "." + dataa.getFullYear();
    var nextDay =
      dataa.getDate() + 1 + "." + dataa.getMonth() + "." + dataa.getFullYear();

    var nextNextDay =
      dataa.getDate() + 2 + "." + dataa.getMonth() + "." + dataa.getFullYear();
    var thirdDate =
      dataa.getDate() + 3 + "." + dataa.getMonth() + "." + dataa.getFullYear();

    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div
        className="container "
        style={{
          marginTop: "5%",
          backgroundColor: "#f1f1f1",
          border: "15px",
          border: "solid",
          borderColor: "rgb(3, 110, 131)",
          borderRadius: "25px",
        }}
      >
        <form className="" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Tworzenie nowego arkusza</h5>

          <AddProject
            handleChange={this.handleChange}
            dataa={today}
            name={"Row1"}
            timee={"12:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={today}
            name={"Row4"}
            timee={"15:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={nextDay}
            name={"Row19"}
            timee={"6:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={nextDay}
            name={"Row28"}
            timee={"15:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={nextNextDay}
            name={"Row43"}
            timee={"06:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={nextNextDay}
            name={"Row52"}
            timee={"15:00"}
          />

          <AddProject
            handleChange={this.handleChange}
            dataa={thirdDate}
            name={"Row67"}
            timee={"06:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={thirdDate}
            name={"Row76"}
            timee={"15:00"}
          />
          <AddProject
            handleChange={this.handleChange}
            dataa={thirdDate}
            name={"Row85"}
            timee={"00:00"}
          />

          <div className="input-field">
            <button className="btn black lighten-1">
              <i class="material-icons right">send</i>PRZELICZ DANE
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    dane: state.project.redirect,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("dispatch");
  console.log(dispatch);
  return {
    addToProject: (project) => dispatch(addToProject(project)),
    addTempData: (project) => dispatch(addTempData(project)),
    deleteLastProject: () => dispatch(deleteLastProject()),
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
)(CreateProject);
