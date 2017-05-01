import * as actionTypes from '../actionTypes/forkSpawnExample'

export function runForkExample() {
  return {type: actionTypes.RUN_FORK}
}

export function runSpawnExample() {
  return {type: actionTypes.RUN_SPAWN}
}


/*
 export function getUsersSuccess(users) {
 return {type: actionTypes.GET_USERS_SUCCESS, users}
 }

 export function getUsersError(error) {
 return {type: actionTypes.GET_USERS_SUCCESS, error}
 }

 export function getComments() {
 return {type: actionTypes.GET_COMMENTS}
 }

 export function getCommentsSuccess(comments) {
 return {type: actionTypes.GET_COMMENTS_SUCCESS, comments}
 }

 export function getCommentsError(error) {
 return {type: actionTypes.GET_COMMENTS_ERROR, error}
 }*/
