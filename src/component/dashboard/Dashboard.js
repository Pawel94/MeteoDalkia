import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";

import calculator from "../../static/calculator.jpg";

import data from "../../static/data.jpg";

import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexWrap: "wrap",
    minWidth: 300,
    width: "100%",
    padding: "5%",
    textAlign: "center",
  },
  image: {
    position: "relative",
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    //color: theme.palette.common.black,
    color: "white",
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}));

function Dashboard(props) {
  const { auth } = props;
  const classes = useStyles();
  if (!auth.uid) return <Redirect to="/signin" />;
  return (
    <div className={classes.root}>
      <div
        style={{ paddingLeft: "1%", paddingRight: "1%", marginBottom: "1%" }}
      >
        <ButtonBase
          focusRipple
          key="2"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "100%",
          }}
        >
          {" "}
          <NavLink to="/createProject">
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${calculator})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                <h3>OBLICZENIA </h3>
                <span className={classes.imageMarked} />
              </Typography>
            </span>{" "}
          </NavLink>
        </ButtonBase>
      </div>
      <div style={{ paddingLeft: "1%", paddingRight: "1%" }}>
        <ButtonBase
          focusRipple
          key="2"
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: "100%",
          }}
        >
          {" "}
          <NavLink to="/history">
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${data})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                <h3>POPRZEDNIE DANE </h3>
                <span className={classes.imageMarked} />
              </Typography>
            </span>{" "}
          </NavLink>
        </ButtonBase>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([])
)(Dashboard);
