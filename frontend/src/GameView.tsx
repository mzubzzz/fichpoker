import {Button, Container, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {getUsers, getGame} from "./ApiService";
import Header from "./Header";

export interface User {
  id: string;
  name: string;
  winner: number;
  baba: number;
  babaCard: number;
  queen: number;
  poker: number;
  classicWinner: number
  darkWinner: number
  goldWinner: number
  moneyWon: number
  bestFriend: number
  punished: number
}


const GameView = () => {

  const [users, setUsers] = useState<User[]>([]);
  const [players, setPlayers] = useState<User[]>([]);

  const togglePlayerParticipation = (user: User) => {
    if(players.includes(user)) {
      setPlayers(players.filter(player => player !== user));
    } else {
      const player = users.find(userItem => userItem === user);
      if (player) {
        let gamers = [...players];
        gamers.push(player);
        setPlayers(gamers);
      }
    }
  }

  const startTheGame = (playersInGame: User[]) => {
    console.log("startTheGame function activated");
    getGame(playersInGame).then((res) => {
      console.log(res);
    });
  }

  useEffect (() => {
    console.log("Use Effect");
    getUsers().then((res) => {
      setUsers(res);
    })
  }, []);

  useEffect (() => {
    console.log("players update");
  }, [players]);

  return(
    <>
      <Container maxWidth="sm">
        <Header></Header>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} container justifyContent="center" spacing={3}>
            {users && users.map(user => 
              <Button
                sx={{margin: '10px'}}
                key={user.id}
                variant={players.includes(user) ? "contained" : "outlined"}
                onClick={() => togglePlayerParticipation(user)}
                size="large">
                {user.name}
              </Button>
            )}
          </Grid>
          <Grid item xs={12} container justifyContent="center" spacing={3}>
            {players.length > 2 &&
              <Button
                sx={{margin: '60px', minWidth: '200px'}}
                variant="contained"
                onClick={() => startTheGame(players)}
                size="large">
                ПОГНАЛИ!
              </Button>
            }
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default GameView;
