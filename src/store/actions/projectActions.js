import interpolation from "../logic/Interpolation";

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

export const deleteLastProject = () => {
  return (dispatch, getState, { getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    firestore
      .collection("excel2")
      .doc("C8uJrlR5n2sy8uB6hwqu")
      .delete()
      .then(() => {
        dispatch({ type: "deleteLastProject_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "deleteLastProject_ERROR" }, err);
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

export const addToProject = (project) => {
  //project = functions(project);
  project = interpolation(project);
  return (dispatch, getState, { getFirestore, getFirebase }) => {
    console.log("addToProject jestem");
    const firestore = getFirestore();
    firestore
      .collection("excel2")
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
