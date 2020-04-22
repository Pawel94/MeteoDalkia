const initState = {
  redirect: false,
  projects: [
    { id: "1", title: "help me find peach", content: "blah blah blah" },
    { id: "2", title: "collect all the stars", content: "blah blah blah" },
    { id: "3", title: "egg hunt with yoshi", content: "blah blah blah" },
  ],
};

const projectReducer = (state = initState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "CREATE_PROJECT_SUCCESS":
      console.log("CREATE_PROJECT_SUCCESS", action.projects);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("CREATE_PROJECT_ERROR", action.err);
      return state;
    case "delete_PROJECT_SUCCESS":
      console.log("delete_PROJECT_SUCCESS");
      return state;
    case "delete_PROJECT_ERROR":
      console.log("delete_PROJECT_ERROR", action.err);
      return state;
    case "addToProject":
      console.log("addToProject");
      return { state, redirect: true };
    case "addTempData":
      console.log("addTempData");
      return { state };
    case "change_Data":
      console.log("change_Data");
      return { state, redirect: false };
    case "change_Data_error":
      console.log("change_Data_error");
      return { state, redirect: true };
    case "ADD_TO_DATA_BASE":
      console.log("ADD_TO_DATA_BASE");
      return state;
    case "ADD_TO_DATA_BASE_ERR":
      console.log("ADD_TO_DATA_BASE_ERR");
      return { state };

    default:
      return state;
  }
};

export default projectReducer;
