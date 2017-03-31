export const getUserByNickname = (users, nickname) => {
  if (users.data && nickname) {
    return users.data.find((user) => { return user && user.nickname === nickname })
  }
  return false
}