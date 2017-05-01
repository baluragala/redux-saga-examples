import * as actionTypes from '../actionTypes/blockingCalls'

export function getUsers() {
  return {type: actionTypes.GET_USERS}
}

export function getUsersSuccess(users) {
  return {type: actionTypes.GET_USERS_SUCCESS, users}
}

export function getUsersError(error) {
  return {type: actionTypes.ERROR, error}
}


export function getCities() {
  return {type: actionTypes.GET_CITIES}
}

export function getCitiesSuccess(comments) {
  return {type: actionTypes.GET_CITIES_SUCCESS, comments}
}

export function getCitiesError(error) {
  return {type: actionTypes.ERROR, error}
}

