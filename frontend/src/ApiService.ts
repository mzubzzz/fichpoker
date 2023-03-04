import { Game, User } from 'types'

const apiMain = 'http://localhost:8118'
const apiUsers = '/users'
const apiNewGame = '/new-game'

const getResource = async (apiPath: string): Promise<Response> => {
  const res = await fetch(apiPath, {
    method: 'GET',
    headers: {
      // 'token': sessionStorage.getItem('session'),
      // Authorization: token ? `Bearer ${token}` : '',
    }
  })

  if (!res.ok) {
    throw new Error(`Error while fetching ${apiPath}, received status is ${res.status}`)
  }
  const resJson = await res.json()
  console.log(resJson)

  return resJson
}

export const getUsers = async (): Promise<User[]> => {
  const res = await getResource(apiMain + apiUsers)

  if (!res.ok) {
    throw new Error(`Error while fetching ${apiMain + apiUsers}, received status is ${res.status}`)
  }

  return await res.json()
}

export const getGame = async (players: User[]): Promise<Game> => {
  const apiPath = apiMain + apiNewGame
  const res = await fetch(apiPath, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(players)
  })

  if (!res.ok) {
    throw new Error(`Error while fetching ${apiPath}, received status is ${res.status}`)
  }
  const resJson = await res.json()
  console.log(resJson)

  return resJson
}
