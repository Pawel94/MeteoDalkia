export const createProject = (project) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database

    console.log("CREATE_PROJECT_SUCCESS jestem");
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Net",
        authorLastName: "Ninja",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
      });
  };
};

export const deleteProject = (project_id) => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("excel_data_base")
      .doc(project_id)
      .delete()
      .then(() => {
        dispatch({ type: "delete_PROJECT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "delete_PROJECT_ERROR" }, err);
      });
  };
};

const calculate = (time) => {
  var data = new Date();
  var ppp = data.getDay() + "." + data.getMonth() + "." + data.getFullYear();
  if (time > 24) {
    time = time - 24;

    ppp = data.getDay() + 1 + "." + data.getMonth() + "." + data.getFullYear();
    return ppp + " " + time + ":00";
  } else {
    return ppp + " " + time + ":00";
  }
};

const functions = (project) => {
  var tempProps = JSON.parse(JSON.stringify(project));
  //[tempProps] = tempProps;
  console.log(project);
  var i;
  var st = { list: [project] };
  var data = new Date();
  data.setHours(12);

  var interwal_t_zewn =
    (parseFloat(tempProps.Row1.temp_z) - parseFloat(tempProps.Row4.temp_z)) / 3;

  var interwal_zach =
    (parseFloat(tempProps.Row1.zach) - parseFloat(tempProps.Row4.zach)) / 3;

  var interwal_Vw =
    (parseFloat(tempProps.Row1.Vw) - parseFloat(tempProps.Row4.Vw)) / 3;

  var interwal_t_zewn_part2 =
    (parseFloat(tempProps.Row4.temp_z) - parseFloat(tempProps.Row19.temp_z)) /
    15;

  var interwal_zach_part2 =
    (parseFloat(tempProps.Row4.zach) - parseFloat(tempProps.Row19.zach)) / 15;

  var interwal_Vw_part2 =
    (parseFloat(tempProps.Row4.Vw) - parseFloat(tempProps.Row19.Vw)) / 15;
  const newList = {
    Vw: tempProps.Row1.Vw,
    data: tempProps.Row1.data,
    temp_z: tempProps.Row1.temp_z,
    zach: "testowe",
  };

  var list = st.list.map((arg2) => {
    for (i = 1; i < 18; i++) {
      var name = "Row" + (1 + i);
      if (i < 4) {
        var list = {
          ...arg2,
          [name]: {
            Vw: parseFloat(
              tempProps.Row1.Vw - parseFloat(interwal_Vw) * i
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row1.temp_z) -
              parseFloat(interwal_t_zewn) * i
            ).toFixed(1),
            zach: parseFloat(
              tempProps.Row1.zach - parseFloat(interwal_zach) * i
            ).toFixed(0),
          },
        };
      }
      if (i >= 4) {
        //data.setHours(15);
        var list = {
          ...arg2,
          [name]: {
            Vw: (
              parseFloat(tempProps.Row4.Vw) -
              parseFloat(interwal_Vw_part2) * (i - 3)
            ).toFixed(0),
            data: calculate(12 + i),
            temp_z: (
              parseFloat(tempProps.Row4.temp_z) -
              parseFloat(interwal_t_zewn_part2) * (i - 3)
            ).toFixed(1),
            zach: (
              parseFloat(tempProps.Row4.zach) -
              parseFloat(interwal_zach_part2) * (i - 3)
            ).toFixed(0),
          },
        };
      }
      arg2 = list;
    }

    return list;
  });

  var tempProp2s = JSON.parse(JSON.stringify(list[0]));
  return tempProp2s;
};

export const addToProject = (project) => {
  project = functions(project);
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log("addToProject jestem");
    const firestore = getFirestore();
    firestore
      .collection("excel")
      .doc("C8uJrlR5n2sy8uB6hwqu")
      .set({
        ...project,
      })
      .then(() => {
        dispatch({ type: "addToProject" });
      })
      .catch((err) => {
        dispatch({ type: "addToProject" }, err);
      });
  };
};

export const addTempData = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //console.log("CREATE_PROJECT_SUCCESS jestem");
    const firestore = getFirestore();
    firestore
      .collection("excel_temp_data")
      .doc("C8uJrlR5n2sy8uB6hwqu")
      .set({
        project,
      })

      .then(() => {
        dispatch({ type: "addTempData" });
      })
      .catch((err) => {
        dispatch({ type: "addTempDataError" }, err);
      });
  };
};

export const changeState = () => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    //console.log("CREATE_PROJECT_SUCCESS jestem");

    dispatch({ type: "change_Data" });
  };
};

export const addToDataBase = (project) => {
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log("addToDataBase jestem");
    const firestore = getFirestore();
    firestore
      .collection("excel_data_base")
      .add({
        project,
        author: "Admin",
        created: new Date(),
      })

      .then(() => {
        dispatch({ type: "ADD_TO_DATA_BASE " });
      })
      .catch((err) => {
        dispatch({ type: "ADD_TO_DATA_BASE_ERR" }, err);
      });
  };
};
