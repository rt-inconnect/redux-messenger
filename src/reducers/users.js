import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from '../utils/constants'

import { fromJS } from 'immutable';

export default (state = fromJS({}), action) => {

  switch (action.type) {

    case FETCH_USERS:
      return state
        .set('loading', true)
        .set('error', false)

    case FETCH_USERS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.users)

    case FETCH_USERS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)

    default:
      return state

  }

}