import {takeEvery, takeLatest, throttle} from "redux-saga";
import {call, put} from "redux-saga/effects"
import * as actionTypes from '../actionTypes/sagaHelpers'
import * as actionCreators from '../actionCreators/sagaHelpers';

function* getUsers() {
  try {
    let users = yield call(() => fetch(`http://localhost:4000/users?_page=1&limit=20`).then(response => response.json()))
    yield put(actionCreators.getUsersSuccess(users))
  } catch (error) {
    yield put(actionCreators.getUsersError(error))
  }
}

function* getUsersByEmail(q) {
  try {
    let users = yield call(() => fetch(`http://localhost:4000/users?email_like=${q}`).then(response => response.json()))
    yield put(actionCreators.getUsersSuccess(users))
  } catch (error) {
    yield put(actionCreators.getUsersError(error))
  }
}

export function* getUsersTakeEvery() {
  yield takeEvery(actionTypes.GET_USERS_E, getUsers)
}

export function* getUsersTakeLatest() {
  yield takeLatest(actionTypes.GET_USERS_L, getUsers)
}

export function* getUsersThrottle() {
  yield throttle(5000, actionTypes.GET_USERS_T, getUsers)
}