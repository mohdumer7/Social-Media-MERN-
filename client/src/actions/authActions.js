import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (FormData, navigate) => async (dispatch) => {
  try {
    const data = await api.signin(FormData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (FormData, navigate) => async (dispatch) => {
  try {
    const data = await api.signup(FormData);
    dispatch({ type: AUTH, data });
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
