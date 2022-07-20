/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";
import jwt_decode from "jwt-decode";

/*
 * Import types { ... }
 * ******************** */
import {
  POST_USER,
  GET_USER,
  LOGIN_USER,
  CHECK_AUTH,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll user
export const getUser = (data) => {
  return (dispatch) => {
    return api
      .get("/Admin/User")
      .then((res) => {
        console.log("getUser", res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID user
export const getUserID = (id) => {
  return (dispatch) => {
    return api
      .get(`/Admin/User/${id}`)
      .then((res) => {
        console.log("getUserID", res.data);
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create user
export const createUser = (data) => {
  return (dispatch) => {
    return api
      .post("/", data)
      .then((res) => {
        dispatch({ type: POST_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


// Login User
export const login = (data) => {
  return (dispatch) => {
    return api
      .post("/login", data)
      .then((res) => {
        if (res.data.success === "success") {
          if (res.data.token) localStorage["user_token"] = res.data.token;
          res.data.token = jwt_decode(res.data.token);
          res.data.authenticate = true;
          dispatch({ type: LOGIN_USER, payload: res.data });
        } else {
          res.data.authenticate = false;
          dispatch({ type: LOGIN_USER, payload: res.data });
        }
      })
      .catch((err) => console.log(err));
  };
};

// Check user authenticate
export const check = () => {
  return (dispatch) => {
    return api
      .get(`/auth/${localStorage["user_token"]}`)
      .then((res) => {
        if (res.data.user) {
          dispatch({ type: CHECK_AUTH, payload: res.data });
        }
      })
      .catch((err) => console.log(err));
  };
};

