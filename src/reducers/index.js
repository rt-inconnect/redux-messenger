import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fromJS } from 'immutable';

import users from './users'
import messages from './messages'

const routeInitialState = fromJS({
  locationBeforeTransitions: null,
})

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        locationBeforeTransitions: action.payload,
      })
    default:
      return state
  }
}

export default combineReducers({
  routing: routeReducer,
  users,
  messages
})