import {combineReducers} from "redux";
import usersReducer from "./reducer-users";
import ActiveUserReducer from "./reducer-active-user";


const allReducers = combineReducers ({
  users: usersReducer,
  activeUser: ActiveUserReducer
});

export default allReducers;
