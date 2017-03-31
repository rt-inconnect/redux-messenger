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

export const fetchMessages = (user) => ({
  type: FETCH_MESSAGES,
  user
})

export const messagesLoaded = (messages) => ({
  type: FETCH_MESSAGES_SUCCESS,
  messages
})

export const messagesLoadingError = (error) => ({
  type: FETCH_MESSAGES_ERROR,
  error
})

export const createMessage = (message) => ({
  type: CREATE_MESSAGE,
  message
})

export const sendMessage = (message) => ({
  type: SEND_MESSAGE,
  message
})

export const messageSended = (message) => ({
  type: SEND_MESSAGE_SUCCESS,
  message
})

export const messageSendingError = (error) => ({
  type: SEND_MESSAGE_ERROR,
  error
})

export const typingMessage = (user) => ({
  type: TYPING_MESSAGE,
  user
})

export const typingEnded = () => ({
  type: TYPING_MESSAGE_SUCCESS
})

export const messageTypingError = (error) => ({
  type: TYPING_MESSAGE_ERROR,
  error
})