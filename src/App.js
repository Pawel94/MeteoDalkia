import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./component/dashboard/Dashboard";
import Navbar from "./component/layout/Navbar";
import ProjectDetail from "./component/project/ProjectDetails";
import SignUp from "./component/auth/SignUp";
import SignIn from "./component/auth/SignIn";
import CreateProject from "./component/project/CreateProject";
import HistoryProjects from "./component/project/HistoryProjects";
import AddProject from "./component/project/AddProject";
import ExcelDetails from "./component/project/ExcelDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/history" component={HistoryProjects} />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/singup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/createProject" component={CreateProject} />
        <Route path="/addProject" component={AddProject} />
        <Route path="/excelDetails" component={ExcelDetails} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
