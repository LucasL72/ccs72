/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import { POST_EVENT, GET_EVENT,GETID_EVENT, DELETE_EVENT, EDIT_EVENT } from "./ActionTypes";

/*
 * Actions
 * ******* */


export const getEvent = (data) => {
  return (dispatch) => {
    return api
      .get("/Admin/Events")
      .then((res) => {
        dispatch({ type: GET_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


export const getEventID = (id) => {
  return (dispatch) => {
    return api
      .get(`/Admin/Events/${id}`)
      .then((res) => {
        dispatch({ type: GETID_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


export const createEvent = (data) => {
  return (dispatch) => {
    return api
      .post("/Admin/Events", data)
      .then((res) => {
        dispatch({ type: POST_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


export const deleteEvent = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Events/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};


export const editEvent = (data) => {
  return (dispatch) => {
    return api
      .put(`/Admin/Events/${data.id}`, data)
      .then((res) => {
        dispatch({ type: EDIT_EVENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};