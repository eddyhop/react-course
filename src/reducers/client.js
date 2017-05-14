// @flow

import { fromJS } from 'immutable'

import { CLIENT_ONLINE, CLIENT_OFFLINE } from '../actions/client'

const INITIAL_STATE = fromJS({
  online: true
})

export default function (state: Object = INITIAL_STATE, action: Object) {
  switch (action.type) {
    case CLIENT_ONLINE:
      return state.setIn(["online"], true)
    case CLIENT_OFFLINE:
      return state.setIn(["online"], false)
    default:
      return state
  }
}
