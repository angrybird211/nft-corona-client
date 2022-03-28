// import { createStore, compose, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "../reducers";

// // compose are enhancers used for composing middlewares for redux
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const configureStore = () => {
//   return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
// };

// const store = configureStore();
//
// export default store;

import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducers from "../reducers";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

// create our store from our rootReducers and use loadFromLocalStorage
// to overwrite any values that we already have saved
const store = createStore(rootReducers, loadFromLocalStorage(), composeEnhancers(applyMiddleware(thunk)));

// listen for store changes and use saveToLocalStorage to
// save them to localStorage
saveToLocalStorage(store.getState());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;