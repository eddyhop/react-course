import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import { createRequest } from '../api';

function* callApi(action) {
  yield put({ type: `${action.type}_REQUEST` })
  try {
    const result = yield call(createRequest, action.payload.request)
    yield put({ type: `${action.type}_SUCCESS`, payload: result })
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, payload: err })
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* takeLogIn() {
  yield takeLatest('LOG_IN', callApi);
}

export default function* root() {
  yield all([
    fork(takeLogIn),
  ])
}