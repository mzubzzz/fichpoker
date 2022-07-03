package main

import (
	"database/sql"
	"errors"
)

type User struct {
	ID     int    `json:"id"`
	Name   string `json:"name"`
	Baba   int    `json:"baba"`
	Winner int    `json:"winner"`
}

func (p *User) getUser(db *sql.DB) error {
	return errors.New("Not implemented")
}

func (p *User) updateUser(db *sql.DB) error {
	return errors.New("Not implemented")
}

func (p *User) deleteUser(db *sql.DB) error {
	return errors.New("Not implemented")
}

func (p *User) createUser(db *sql.DB) error {
	return errors.New("Not implemented")
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
