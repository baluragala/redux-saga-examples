import {combineReducers} from 'redux'
import usersReducer from "./usersReducer";

const reducer = combineReducers({
  users: usersReducer
});


export default reducer;