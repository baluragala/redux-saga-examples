import * as actionTypes from '../actionTypes/sagaHelpers';

export default (prevState = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_USERS:
      return Object.assign({}, prevState, {isFetching: true});
    case actionTypes.GET_USERS_SUCCESS:
      return Object.assign({}, prevState, {isFetching: false}, {users: action.users});
    case actionTypes.ERROR:
      return Object.assign({}, prevState, {isFetching: false}, {error: action.error});
    default:
      return prevState;
  }
}