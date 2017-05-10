import { all, fork, call, put, takeLatest } from 'redux-saga/effects'
import { createRequest } from '../api';

function* fetchUser(action) {
   try {
      const user = yield call(createRequest, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest('LOG_IN_REQUEST', fetchUser);
}

export default function* root() {
  yield all([
    fork(mySaga),
  ])
}