import * as userActionTypes from '../actionTypes/users';

export default (prevState = {}, action) => {
  console.log(prevState,action);
  switch (action.type) {
    case userActionTypes.GET_USERS:
      return Object.assign({}, prevState, {isFetching: true});
    case userActionTypes.GET_USERS_SUCCESS:
      return Object.assign({}, prevState, {isFetching: false}, {users: action.users});
    case userActionTypes.GET_USERS_ERROR:
      return Object.assign({}, prevState, {isFetching: false}, {error: action.error});
    default:
      return prevState;
  }
}