import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20%",
      backgroundColor: "",
    },
  },
}));

export default function AddProject(props) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        label="DATA"
        id="data"
        type="text"
        // defaultValue={props.timee}
        value={props.dataa + " " + props.timee}
        name={props.name}
        inputProps={{
          min: 0,
          style: { textAlign: "center", borderBottomWidth: "0px" },
        }} // the change is here
        style={{ backgroundColor: "#f1f1f1" }}
        variant="outlined"
        onload={props.handleChange}
      />

      <TextField
        required
        id="temp_z"
        label="TEMPERATURA"
        type={props.timee}
        variant="outlined"
        inputProps={{
          min: 0,
          style: { textAlign: "center", borderBottomWidth: "0px " },
        }}
        style={{ backgroundColor: "#f1f1f1" }}
        name={props.name}
        onChange={props.handleChange}
        onKeyDown={props.getDate}
        tabIndex="0"
      />

      <TextField
        required
        id="Vw"
        label="Vw"
        type="search"
        variant="outlined"
        inputProps={{
          min: 0,
          style: { textAlign: "center", borderBottomWidth: "0px" },
        }} // the change is here
        style={{ backgroundColor: "#f1f1f1", borderBottomWidth: "0px" }}
        name={props.name}
        onChange={props.handleChange}
      />

      <TextField
        required
        id="zach"
        label="ZACHMURZENIE"
        type="search"
        variant="outlined"
        inputProps={{
          min: 0,
          style: { textAlign: "center", borderBottomWidth: "0px" },
        }} // the change is here
        style={{ backgroundColor: "#f1f1f1" }}
        name={props.name}
        onChange={props.handleChange}
      />
    </form>
  );
}
