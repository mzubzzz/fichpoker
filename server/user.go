package main

import (
	"database/sql"
)

type User struct {
	ID            uint   `json:"id"`
	Name          string `json:"name"`
	Baba          uint   `json:"baba"`
	BabaCard      uint   `json:"baba_card"`
	Queen         uint   `json:"queen"`
	Poker         uint   `json:"poker"`
	Winner        uint   `json:"winner"`
	ClassicWinner uint   `json:"classic_winner"`
	DarkWinner    uint   `json:"dark_winner"`
	GoldWinner    uint   `json:"gold_winner"`
	Ordered       uint   `json:"ordered"`
	Gained        uint   `json:"gained"`
	MoneyWon      uint64 `json:"money_won"`
	BestFriend    uint   `json:"best_friend"`
	Punished      uint   `json:"punished"`
}

func getUsers(db *sql.DB, start, count int) ([]User, error) {
	rows, err := db.Query(
		"SELECT id, name, baba, winner FROM users LIMIT $1 OFFSET $2",
		count, start)

	if err != nil {
		return nil, err
	}

	defer rows.Close()

	users := []User{}

	for rows.Next() {
		var u User
		if err := rows.Scan(&u.ID, &u.Name, &u.Baba, &u.Winner); err != nil {
			return nil, err
		}
		users = append(users, u)
	}

	return users, nil
}
