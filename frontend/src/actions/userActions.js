import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('/api/v1/login', { email, password }, config);

    if (data && data.user) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data.user,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Invalid response format: Missing user data",
      });
    }
  } catch (error) {
    let errorMessage = error.message;
    if (error.response && error.response.data && error.response.data.message) {
      errorMessage = error.response.data.message;
    }
    
    dispatch({
      type: LOGIN_FAIL,
      payload: errorMessage,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };