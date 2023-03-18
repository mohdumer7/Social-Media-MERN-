import * as api from "../api";

export const getPosts = async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log("the actual payload", data);
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (err) {
    console.log(err);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const data = await api.CreatePost(post);
    dispatch({ type: "CREATE", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatedPost(id, post);
    dispatch({ type: "UPDATE", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};
