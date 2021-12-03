import axios from "axios";
import {
  GET_ERRORS,
  CREATE_CAPTCHA
} from "./type";

export const createCaptcha = () => async (dispatch) => {
  try {
    const res=await axios.get("http://localhost:3001/captcha/1");
    dispatch({
        type: CREATE_CAPTCHA,
        payload: res.data,
      });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};






