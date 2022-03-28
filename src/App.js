import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { Provider } from 'react-redux';

// import store
import store from "./redux/store";
import { setCurrentUser, logoutUser } from "./redux/action/authActions";

import useEagerConnect from "./hooks/useEagerConnect";

// import layout
import Layout from "./components/common/layout";
import PrivateRoute from "./components/common/privateRoute";

// import pages
import Dashboard from "./components/pages/index";
import Admin from "./components/pages/admin";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import ForgotPassword from "./components/pages/forgotPassword";
import Settings from "./components/pages/settings";

// import utils
import setAuthToken from "./utils/setAuthToken";

// import style
import "./App.scss";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}


function App() {
  useEagerConnect()

  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />

          <Layout>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/admin" component={Admin} />
            <PrivateRoute exact path="/settings" component={Settings} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;