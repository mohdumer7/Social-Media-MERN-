import { useNavigate } from "react-router-dom";
import * as api from "../api";
import { AUTH } from "../constants/actionTypes";

export const signin = (FormData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};

export const signup = (FormData, navigate) => async (dispatch) => {
  try {
    navigate("/");
  } catch (err) {
    console.log(err);
  }
};
