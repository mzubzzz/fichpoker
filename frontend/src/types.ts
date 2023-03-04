export interface User {
  id: string
  name: string
  winner: number
  baba: number
  babaCard: number
  queen: number
  poker: number
  classicWinner: number
  darkWinner: number
  goldWinner: number
  moneyWon: number
  bestFriend: number
  punished: number
}

export interface Round {
  id: number
  round_type: string
  game_id: string
  players: User[]
}

export interface Game {
  id: number
  dateCreated: Date
  rounds: Round[]
}
