import { all, fork, select, call, put, takeLatest } from 'redux-saga/effects'
import { createRequest } from '../api'
import { getToken } from '../selectors'

function* callApi(action) {
  yield put({ type: `${action.type}_REQUEST` })
  try {
    const token = yield select(getToken)
    const result = yield call(createRequest, action.payload.request, token)
    yield put({ type: `${action.type}_SUCCESS`, payload: result.data })
  } catch (err) {
    yield put({ type: `${action.type}_FAIL`, payload: err })
  }
}

function* takeLogIn() {
  yield takeLatest('LOG_IN', callApi)
}

export default function* root() {
  yield all([
    fork(takeLogIn),
  ])
}