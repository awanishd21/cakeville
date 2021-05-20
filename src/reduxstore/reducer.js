var demo = function (
  state = {
    user: null,
  },
  action
) {
  switch (action.type) {
    case "LOGIN": {
      console.log("Here we have to write logic for login");
      state = { ...state };
      state["isloggedin"] = true;
      state["user"] = action.payload;
      return state;
    }
    case "LOGOUT": {
      state = { ...state };
      localStorage.clear();
      delete state["isloggedin"];
      delete state["user"];
      return state;
    }
    case "CHECK_USER": {
      console.log("Here we have to write logic for login");
      state = { ...state };
      state["isloggedin"] = true;
      state["user"] = action.payload;
      return state;
    }

    case "SETCARTDATA": {
      console.log("Here we have to write logic for set cart details");
      state = { ...state };
      state["cartdata"] = action.payload;
      return state;
    }

    default:
      return state;
  }
};
export default demo;
