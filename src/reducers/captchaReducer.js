/* eslint-disable import/no-anonymous-default-export */
import {CREATE_CAPTCHA} from "../actions/type";

const initialState = {
  user: {},
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_CAPTCHA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
