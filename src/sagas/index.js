import { fork } from 'redux-saga/effects'
import users from './users'
import messages from './messages'

export default function* rootSaga() {
  yield fork(users)
  yield fork(messages)
}