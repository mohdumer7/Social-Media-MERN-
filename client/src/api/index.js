import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  return await axios.get(url);
};

export const CreatePost = async (newPost) => {
  return axios.post(url, newPost);
};

export const updatedPost = async (id, updatedPost) => {
  await axios.patch(`${url}/${id}`, updatedPost);
};

export const deletePost = async (id) => {
  await axios.delete(`${url}/${id}`);
};

export const likePost = async (id) => {
  return await axios.patch(`${url}/${id}/likePost`);
};
