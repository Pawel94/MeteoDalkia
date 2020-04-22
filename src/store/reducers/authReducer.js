const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_success":
      console.log("LOGIN_success");
      return {
        ...state,
        authError: null,
      };
    case "LOGIN_errr":
      console.log("LOGIN_errr");
      return {
        ...state,
        authError: "LOGIN_errr",
      };
    case "Signout_success":
      console.log("Signout_success");
      return state;
    case "SIGNUP_success":
      console.log("SIGNUP_success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_errr":
      console.log("SIGNUP_errr");
      return {
        ...state,
        authError: action.err.message,
      };
    default:
      return state;
  }
};

export default authReducer;
