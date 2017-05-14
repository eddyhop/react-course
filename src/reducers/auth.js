// @flow

import { fromJS } from 'immutable'

import { LOG_IN } from '../actions/auth'
import { WINDOW_RELOAD } from '../actions/window'

// type STATE = {
//   user: Object,
//   token: string,
//   expires: number,
//   loading: boolean
// }

const INITIAL_STATE = fromJS({
  user: undefined,
  token: '',
  expires: 0,
  loading: false
})

export default function (state: Object = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case LOG_IN + '_REQUEST':
      return state.setIn(["loading"], true)
    case LOG_IN + '_SUCCESS':
      return state.merge({
        user: action.payload.user,
        token: action.payload.token,
        expires: action.payload.expires,
        loading: false
      })
    case LOG_IN + '_FAIL':
      return state.setIn(["loading"], false)
    case WINDOW_RELOAD:
      return state.setIn(["loading"], false)
    default:
      return state
  }
}
