import axios from "../api";

const setAuthToken = token => {
  if (token) {
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common["authToken"] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common["authToken"];
  }
};
export default setAuthToken;