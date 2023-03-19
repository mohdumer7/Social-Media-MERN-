import * as api from "../api";
import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  LIKE_POST,
} from "../constants/actionTypes";

export const getPosts = async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    const action = { type: FETCH_ALL, payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.CreatePost(post);
    console.log("post data", data);
    dispatch({ type: CREATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatedPost(id, post);
    dispatch({ type: UPDATE, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likeAction = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    console.log(data);
    dispatch({ type: LIKE_POST, payload: data });
  } catch (err) {
    console.log(err);
  }
};
