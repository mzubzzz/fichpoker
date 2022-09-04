package main

import (
	"database/sql"
	"time"
)

type Game struct {
	ID          uint      `json:"id"`
	DateCreated time.Time `json" "date_created"`
	Rounds      []Round   `json:"rounds"`
}

func getNewGame(db *sql.DB) (*Game, error) {
	lastId := 0
	err := db.QueryRow("INSERT INTO games(date_created) VALUES($1) RETURNING id", time.Now()).Scan(&lastId)
	rows, err := db.Query("SELECT id, date_created FROM games WHERE id=$1", lastId)

	if err != nil {
		return nil, err
	}

	game := Game{}

	for rows.Next() {
		var g Game
		if err := rows.Scan(&g.ID, &g.DateCreated); err != nil {
			return nil, err
		}
		game = g
	}

	return &game, nil
}
