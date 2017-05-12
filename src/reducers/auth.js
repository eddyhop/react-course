import { LOG_IN, LOG_OUT } from '../actions/auth'

const INITIAL_STATE = {
  user: undefined,
  loading: false
}

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN + '_REQUEST':
      return { user: state.user, loading: true }
    case LOG_IN + '_SUCCESS':
      return { user: action.payload, loading: false }
    case LOG_IN + '_FAIL':
      return { user: state.user, loading: false }
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state
  }
}

export default counter