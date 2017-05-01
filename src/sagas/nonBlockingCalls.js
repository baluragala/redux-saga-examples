import {delay, takeEvery} from 'redux-saga'
import {fork, call, put, spawn, take} from 'redux-saga/effects'
import * as actionTypes from '../actionTypes/nonBlockingCalls';

const API_ENDPOINT_CITIES = 'http://localhost:4000/cities';
const API_ENDPOINT_USERS = 'http://localhost:4000/users';

function* getUsers() {
  yield take(actionTypes.GET_USERS);
  yield fork(fetchResource, API_ENDPOINT_USERS, {type: actionTypes.GET_USERS_SUCCESS})
}

function* getCities() {
  yield take(actionTypes.GET_CITIES);
  yield fork(fetchResource, API_ENDPOINT_CITIES, {type: actionTypes.GET_CITIES_SUCCESS})
}

function* fetchResource(resource, successAction) {
  const data = yield call(() => fetch(resource).then(r => r.json()));
  successAction.data = data;
  console.log(successAction);
  yield put(successAction)
}

export function* runNonBlockingCallsExample() {
  yield [
    getUsers(), getCities()
  ]
}