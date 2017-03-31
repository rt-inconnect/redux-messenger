import { FETCH_USERS } from '../utils/constants'
import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { usersLoaded, usersLoadingError } from '../actions/users'

import {usersApi} from '../utils/api'

export function* fetchUsersSaga() {
  try {
    const users = yield call(usersApi)
    yield put(usersLoaded(users))
  } catch (error) {
    yield put(usersLoadingError(error))
  }
}

export function* watchFetchUsers() {
  yield takeLatest(FETCH_USERS, fetchUsersSaga)
}

export default function* users() {
  yield fork(watchFetchUsers)
}