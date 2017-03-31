import faker from 'faker'

const fakeMessage = (user, itsMe) => {
  return {
    id: faker.random.number(),
    body: faker.lorem.sentences(),
    createdAt: faker.date.recent(),
    author: {
      name: itsMe ? 'RT' : user.name,
      avatar: itsMe ? 'images/me.jpg' : user.avatar,
    }
  }
}

const fakeUser = () => {
  return {
    id: faker.random.number(),
    name: faker.name.findName(),
    nickname: faker.name.firstName().toLowerCase(),
    avatar: faker.image.avatar(),
    lastSeen: faker.date.recent()
  }
}

export const usersApi = () => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(Array(10).keys()).map(fakeUser))
    }, 1000)
  })
  .then(response => {
    return response
  })

}

export const messagesApi = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Array.from(Array(10).keys()).map((i) => fakeMessage(user, i%2)))
    }, 1000)
  })
  .then(response => {
    return response
  })

}

export const createMessageApi = (user) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(fakeMessage(user))
    }, 5000)
  })
  .then(response => {
    return response
  })

}

export const sendMessageApi = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      message.id = faker.random.number()
      message.createdAt = faker.date.recent()
      resolve(message)
    }, 1000)
  })
  .then(response => {
    return response
  })

}
