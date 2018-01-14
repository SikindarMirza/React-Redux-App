import {combineReducers} from "redux";
import usersReducer from "./reducer-users"


const allReducers = combineReducers ({
  users: usersReducer
});

export default allReducers;
