import { FETCH_MESSAGES, SEND_MESSAGE, TYPING_MESSAGE } from '../utils/constants'
import { call, put, takeLatest, takeEvery, fork } from 'redux-saga/effects'
import {
  messagesLoaded,
  messagesLoadingError,
  createMessage,
  messageSended,
  messageSendingError,
  typingEnded,
  messageTypingError
} from '../actions/messages'

import { messagesApi, sendMessageApi, createMessageApi } from '../utils/api'

export function* fetchMessagesSaga(action) {
  try {
    const messages = yield call(messagesApi, action.user)
    yield put(messagesLoaded(messages))
  } catch (error) {
    yield put(messagesLoadingError(error))
  }
}
export function* watchFetchMessages() {
  yield takeLatest(FETCH_MESSAGES, fetchMessagesSaga)
}

export function* sendMessageSaga(action) {
  try {
    const message = yield call(sendMessageApi, action.message)
    yield put(messageSended(message))
    yield put(createMessage(message))
  } catch (error) {
    yield put(messageSendingError(error))
  }
}
export function* watchSendMessage() {
  yield takeEvery(SEND_MESSAGE, sendMessageSaga)
}

export function* typingMessageSaga(action) {
  try {
    const message = yield call(createMessageApi, action.user)
    yield put(typingEnded())
    yield put(createMessage(message))
  } catch (error) {
    yield put(messageTypingError(error))
  }
}
export function* watchTypingMessage() {
  yield takeEvery(TYPING_MESSAGE, typingMessageSaga)
}

export default function* messages() {
  yield fork(watchFetchMessages)
  yield fork(watchSendMessage)
  yield fork(watchTypingMessage)
}