import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER } from "./types";

import axios from "../../api";

// Register User
export const registerUser = (userData, history) => dispatch => {
  axios.post("/users", userData)
    .then(res => {
      window.location.href = "./login";
    })
    .catch(err => { alert(err.response.data.msg) })
}

// Login
export const loginUser = (userData) => dispatch => {
  axios.post("/auth/login", userData)
    .then(res => {
      const { success, token } = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      if (success) {
        window.location.href = "./dashboard";
      }
    }
    )
    .catch(err => {
      alert(err.response.data.msg);

      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    })
}

// Get current user
export const getCurrentUser = (userData) => dispatch => {
  axios.get(`/users/userByEmail`, userData)
    .then(res => {
      return res;
      // window.location.href = "./login";
    })
    .catch(err => { alert(err.response.data.msg) })
}

// Get all users
export const getUsers = () => dispatch => {
  axios.get(`/users`)
    .then(res => {
      console.log("Resutl are", res);
      return res;
      // window.location.href = "./login";
    })
    .catch(err => { alert(err.response.data.msg) })
}


// Update user
export const updateUser = ({ id, userData }) => dispatch => {
  console.log("user index is", id);
  axios.put(`/users/${id}`, userData)
    .then(res => {
      return res;
      // window.location.href = "./login";
    })
    .catch(err => { alert(err.response.data.msg) })
}

// Set logged in user
export const setCurrentUser = decoded_data => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded_data
  };
};

// Logout user
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

// Reset password
export const resetPassword = (email) => dispatch => {
  axios.post("/auth/forgot-password", email)
    .then(res => { })
    .catch(err => { console.log("error occured: ", err) })
}
