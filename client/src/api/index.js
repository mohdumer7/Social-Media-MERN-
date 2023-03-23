import axios from "axios";
// const API = axios.create({ baseURL: "http://localhost:5000" });
const API = axios.create({ baseURL: "https://sociopath.onrender.com" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).data.token
    }`;
  }
  console.log(req.headers);
  return req;
});

// const url = "http://localhost:5000/posts";
// const url = "https://sociopath.onrender.com/posts";

export const fetchPosts = async () => {
  return await API.get("/posts");
};

export const CreatePost = async (newPost) => {
  return API.post("/posts", newPost);
};

export const updatedPost = async (id, updatedPost) => {
  return await API.patch(`/posts/${id}`, updatedPost);
};

export const deletePost = async (id) => {
  await API.delete(`/posts/${id}`);
};

export const likePost = async (id) => {
  return await API.patch(`/posts/${id}/likePost`);
};

export const signin = (formData) => API.post("/users/signin", formData);

export const signup = (formData) => API.post("/users/signup", formData);
