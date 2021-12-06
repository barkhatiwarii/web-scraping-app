import axios from "axios";
import { GET_ERRORS, CREATE_CAPTCHA } from "./type";

export const createCaptcha = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://web-scrapping-app.herokuapp.com/captcha/1"
    );
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
export const createTextCaptcha = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://web-scrapping-app.herokuapp.com/captcha/2"
    );
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
