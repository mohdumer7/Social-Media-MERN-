import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = async () => {
  return await axios.get(url);
};

export const CreatePost = async (newPost) => {
  axios.post(url, newPost);
};
