
import { fromJS } from 'immutable'

import { GET_LATEST_STUFF } from '../actions/stuff'
import { WINDOW_RELOAD } from '../actions/window'

const INITIAL_STATE = fromJS({
  loading: false
})

export default function (state: Object = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case GET_LATEST_STUFF + '_REQUEST':
      return state.setIn(["loading"], true)
    case GET_LATEST_STUFF + '_SUCCESS':
      return state.merge({
        loading: false
      })
    case GET_LATEST_STUFF + '_FAIL':
      return state.setIn(["loading"], false)
    case WINDOW_RELOAD:
      return state.setIn(["loading"], false)
    default:
      return state
  }
}
