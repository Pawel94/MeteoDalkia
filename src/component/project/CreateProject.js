import React, { Component } from "react";
import { connect } from "react-redux";
import { addToProject, addTempData } from "../../store/actions/projectActions";
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
        3000
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
      data.getDay() + "." + data.getMonth() + "." + data.getFullYear();
    var nextDay =
      data.getDay() + 1 + "." + data.getMonth() + "." + data.getFullYear();
    if (s === "Row1") {
      console.log(today);
      return today + " 12:00";
    }
    if (s === "Row4") {
      console.log("srodek");
      return today + " 15:00";
    }
    if (s === "Row19") {
      console.log("srodek");
      return nextDay + " 6:00";
    }
    if (s === "Row30") {
      console.log("srodek");
      return nextDay + " 244:00";
    }
  };

  handleChange = (e) => {
    var data = new Date();
    var dataa = this.getDate(e.target.name);
    console.log(dataa);
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

    console.log(this.state);
    this.props.addToProject(this.state);
    this.props.addTempData(this.state);

    console.log("this.props.addToProject(this.state)");
    console.log();
    axios.post("https://us-central1-meteo-3323f.cloudfunctions.net/addItem", {
      item: this.state.Row1,
    });
  };

  render() {
    const { auth } = this.props;
    var dataa = new Date();
    var today =
      dataa.getDate() + "." + dataa.getMonth() + "." + dataa.getFullYear();
    var nextDay =
      dataa.getDate() + 1 + "." + dataa.getMonth() + "." + dataa.getFullYear();

    console.log("dataaaaa");
    console.log(dataa.getDay());
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
            name={"Row30"}
            timee={"15:00"}
          />

          <div className="input-field">
            <button className="btn pink lighten-1">Create</button>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
