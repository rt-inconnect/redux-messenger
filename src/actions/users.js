import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR
} from '../utils/constants'

export const fetchUsers = () => ({
  type: FETCH_USERS
})

export const usersLoaded = (users) => ({
  type: FETCH_USERS_SUCCESS,
  users
})

export const usersLoadingError = (error) => ({
  type: FETCH_USERS_ERROR,
  error
})