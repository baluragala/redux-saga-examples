import {delay, takeEvery} from 'redux-saga'
import {fork, call, put, spawn, take} from 'redux-saga/effects'
import * as actionTypes from '../actionTypes/blockingCalls';

const API_ENDPOINT_CITIES = 'http://localhost:4000/cities';
const API_ENDPOINT_USERS = 'http://localhost:4000/users';

function* getData() {
  yield take(actionTypes.GET_USERS);
  yield fork(fetchResource, API_ENDPOINT_USERS, {type: actionTypes.GET_USERS_SUCCESS});
  yield take(actionTypes.GET_CITIES);
  yield fork(fetchResource, API_ENDPOINT_CITIES, {type: actionTypes.GET_CITIES_SUCCESS})
}

function* fetchResource(resource, successAction) {
  const data = yield call(() => fetch(resource).then(r => r.json()));
  successAction.data = data;
  console.log(successAction);
  yield put(successAction)
}

export function* runBlockingCallsExample() {
  yield [
    getData()
  ]
}