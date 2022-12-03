package main

import (
	"database/sql"
	"log"
	"time"
)

type Game struct {
	ID          uint      `json:"id"`
	DateCreated time.Time `json" "date_created"`
	Rounds      []Round   `json:"rounds"`
}

func (g Game) Initialize(db *sql.DB, users []User) {
	lastId := 0
	err := db.QueryRow("INSERT INTO games(date_created) VALUES($1) RETURNING id", time.Now()).Scan(&lastId)
	if err != nil {
		log.Fatal("Failed to create the game")
	}
	generateRounds(db, users, lastId)

	rows, err := db.Query("SELECT id, date_created FROM games WHERE id=$1", lastId)

	if err != nil {
		log.Fatal("Failed to get the game")
		return
	}

	for rows.Next() {
		if err := rows.Scan(&g.ID, &g.DateCreated); err != nil {
			return
		}
	}
}

func generateRounds(db *sql.DB, users []User, gameId int) {
	const deckCardsAmount = 36
	var classicRoundsAmount = deckCardsAmount/len(users) + (deckCardsAmount/len(users) - 1)
	for i := 1; i <= classicRoundsAmount; i++ {
		db.QueryRow("INSERT INTO rounds(game_id) VALUES($1)", gameId)
	}
	for i := 1; i <= len(users); i++ {
		db.QueryRow("INSERT INTO rounds(game_id, round_type) VALUES($1, $2)", gameId, "dark")
	}
	for i := 1; i <= len(users); i++ {
		db.QueryRow("INSERT INTO rounds(game_id, round_type) VALUES($1, $2)", gameId, "gold")
	}
}
