import * as a from 'redux-saga'
import {fork, call, put, take, takeLatest, all} from 'redux-saga/effects'
import * as actionTypes from '../actionTypes/parallel';

console.log(a)

const API_ENDPOINT_CITIES = 'http://localhost:4000/cities';
const API_ENDPOINT_USERS = 'http://localhost:4000/users';

function* getData() {
  const r = yield all([
    call(fetchResource, API_ENDPOINT_USERS, {type: actionTypes.GET_USERS_SUCCESS}),
    call(fetchResource, API_ENDPOINT_CITIES, {type: actionTypes.GET_CITIES_SUCCESS}),
  ]);
  console.log(r);
}

function* fetchResource(resource, successAction) {
  const data = yield call(() => fetch(resource).then(r => r.json()));
  successAction.data = data;
  console.log(successAction);
  yield put(successAction)
}

export function* runParallelCallsExample() {
  yield takeLatest(actionTypes.GET_DATA, getData)
}