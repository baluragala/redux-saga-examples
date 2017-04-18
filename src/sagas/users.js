import {takeEvery, takeLatest, throttle} from "redux-saga";
import {call, put} from "redux-saga/effects"
import * as userActionTypes from '../actionTypes/users'
import * as userActionCreators from '../actionCreators/users';

function* getUsers() {
  try {
    let users = yield call(() => fetch(`http://localhost:4000/users?_page=1&limit=20`).then(response => response.json()))
    yield put(userActionCreators.getUsersSuccess(users))
  } catch (error) {
    yield put(userActionCreators.getUsersError(error))
  }
}

function* getUsersByEmail(q) {
  try {
    let users = yield call(() => fetch(`http://localhost:4000/users?email_like=${q}`).then(response => response.json()))
    yield put(userActionCreators.getUsersSuccess(users))
  } catch (error) {
    yield put(userActionCreators.getUsersError(error))
  }
}

/*export function* getUsersWatcher() {
 yield takeEvery(userActionTypes.GET_USERS, getUsers)
 }*/

/*
 export function* getUsersWatcher() {
 yield takeLatest(userActionTypes.GET_USERS, getUsers)
 }*/

export function* getUsersWatcher() {
  yield throttle(2000, userActionTypes.GET_USERS, getUsers)
}