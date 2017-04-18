import {getUsersWatcher} from './users';
import {fork,spawn} from "redux-saga/effects";

/*
 export default function* rootSaga() {
 yield [getUsersWatcher()]
 }*/

export default function* rootSaga() {
  yield spawn(getUsersWatcher)
}