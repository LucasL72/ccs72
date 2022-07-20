/*
 * Import - Module
 * *************** */
import { api } from "../../config/axios";

/*
 * Import types { ... }
 * ******************** */
import {
  POST_ARTICLE,
  GET_ARTICLE,
  GETID_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTNEWS,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// getAll Article
export const getArticles = (data) => {
  return (dispatch) => {
    return api
      .get("/Blog")
      .then((res) => {
        dispatch({ type: GET_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
// getNews 2 last
export const getNews = (data) => {
  return (dispatch) => {
    return api
      .get("/Actu")
      .then((res) => {
        dispatch({ type: GET_ARTNEWS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// getID Article
export const getArticleID = (id) => {
  return (dispatch) => {
    return api
      .get(`/Blog/${id}`)
      .then((res) => {
        dispatch({ type: GETID_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Create Article
export const createArticle = (data) => {
  return (dispatch) => {
    return api
      .post("/Admin/Blog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        dispatch({ type: POST_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

// Delete Article
export const deleteArticle = (id) => {
  return (dispatch) => {
    return api
      .delete(`/Admin/Blog/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_ARTICLE, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
