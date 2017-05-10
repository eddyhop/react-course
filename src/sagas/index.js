
import { fork } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello Sagas!')
}

export default function* root() {
  yield [
    fork(helloSaga),
  ]
}