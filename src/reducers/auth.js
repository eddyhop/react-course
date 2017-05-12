import { LOG_IN, LOG_OUT } from '../actions/auth'

const INITIAL_STATE = {
  user: undefined,
  token: '',
  expires: 0,
  loading: false
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOG_IN + '_REQUEST':
      return Object.assign({}, state, { loading: true })
    case LOG_IN + '_SUCCESS':
      return {
        user: action.payload.user,
        token: action.payload.token,
        expires: action.payload.expires,
        loading: false
      }
    case LOG_IN + '_FAIL':
      return Object.assign({}, state, { loading: false })
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state
  }
}
