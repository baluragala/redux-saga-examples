import * as userActionTypes from '../actionTypes/users'

export function getUsers() {
  return {type: userActionTypes.GET_USERS}
}

export function getUsersSuccess(users) {
  return {type: userActionTypes.GET_USERS_SUCCESS, users}
}

export function getUsersError(error) {
  return {type: userActionTypes.GET_USERS_SUCCESS, error}
}