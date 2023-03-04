import { Button, Container, Grid } from '@mui/material'
import { useEffect, useState } from 'react'
import { Game, User } from 'types'
import { getUsers, getGame } from './ApiService'
import Header from './Header'

const GameView = (): React.ReactElement => {
  const [users, setUsers] = useState<User[]>([])
  const [players, setPlayers] = useState<User[]>([])

  const togglePlayerParticipation = (user: User): void => {
    if (players.includes(user)) {
      setPlayers(players.filter(player => player !== user))
    } else {
      const player = users.find(userItem => userItem === user)
      if (player != null) {
        const gamers = [...players]
        gamers.push(player)
        setPlayers(gamers)
      }
    }
  }

  const startTheGame = async (playersInGame: User[]): Promise<Game> => {
    console.log('startTheGame function activated')
    return await getGame(playersInGame)
  }

  useEffect(() => {
    console.log('Use Effect');
    (async () => {
      setUsers(await getUsers())
    })()
  }, [])

  useEffect(() => {
    console.log('players update')
  }, [players])

  return (
    <>
      <Container maxWidth="sm">
        <Header></Header>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} container justifyContent="center" spacing={3}>
            {users?.map(user =>
              <Button
                sx={{ margin: '10px' }}
                key={user.id}
                variant={players.includes(user) ? 'contained' : 'outlined'}
                onClick={() => togglePlayerParticipation(user)}
                size="large">
                {user.name}
              </Button>
            )}
          </Grid>
          <Grid item xs={12} container justifyContent="center" spacing={3}>
            {players.length > 2 &&
              <Button
                sx={{ margin: '60px', minWidth: '200px' }}
                variant="contained"
                onClick={async () => await startTheGame(players)}
                size="large">
                ПОГНАЛИ!
              </Button>
            }
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default GameView
