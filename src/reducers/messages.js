import {
  FETCH_MESSAGES,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_ERROR,

  CREATE_MESSAGE,

  SEND_MESSAGE,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_ERROR,

  TYPING_MESSAGE,
  TYPING_MESSAGE_SUCCESS,
  TYPING_MESSAGE_ERROR
} from '../utils/constants'

import { fromJS } from 'immutable';

export default (state = fromJS({}), action) => {

  switch (action.type) {

    case FETCH_MESSAGES:
      return state
        .set('loading', true)
        .set('error', false)

    case FETCH_MESSAGES_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('data', action.messages)

    case FETCH_MESSAGES_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error)

    case CREATE_MESSAGE:
      return state
        .set('data', fromJS([ ...state.toJS().data, action.message ]))

    case SEND_MESSAGE:
      return state
        .set('sending', true)
        .set('errorSending', false)
        .set('message', action.message)

    case SEND_MESSAGE_SUCCESS:
      return state
        .set('sending', false)
        .set('errorSending', false)
        .set('message', action.message)

    case SEND_MESSAGE_ERROR:
      return state
        .set('sending', false)
        .set('errorSending', action.error)

    case TYPING_MESSAGE:
      return state
        .set('typing', true)
        .set('errorTyping', false)
        .set('userTyping', action.user.nickname)

    case TYPING_MESSAGE_SUCCESS:
      return state
        .set('typing', false)
        .set('errorTyping', false)

    case TYPING_MESSAGE_ERROR:
      return state
        .set('typing', false)
        .set('errorTyping', action.error)

    default:
      return state

  }

}