import axios from "axios";
import { GET_ERRORS, CREATE_CAPTCHA } from "./type";
let backend_uri_server = "https://web-scrapping-app.herokuapp.com";
let local_uri_server = "http://localhost:8080";
export const createCaptcha = () => async (dispatch) => {
  try {
    const res = await axios.get(`${local_uri_server}/captcha/1`);
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
    const res = await axios.get(`${local_uri_server}/captcha/2`);
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
