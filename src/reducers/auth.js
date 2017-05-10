import { LOG_IN, LOG_OUT } from '../actions/auth'

const INITIAL_STATE = {
  user: undefined,
}

const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_IN:
      return { user: action.payload }
    case LOG_OUT:
      return INITIAL_STATE;
    default:
      return state
  }
}

export default counter