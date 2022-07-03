package main

import (
	"log"
	"os"
	"testing"
)

var a App

func TestMain(m *testing.M) {
	a.Initialize(
		os.Getenv("APP_DB_USERNAME"),
		os.Getenv("APP_DB_PASSWORD"),
		os.Getenv("APP_DB_NAME"))

	ensureTableExists()
	code := m.Run()
	clearTable()
	os.Exit(code)
}

func ensureTableExists() {
	if _, err := a.DB.Exec(tableCreationQuery); err != nil {
		log.Fatal(err)
	}
}

func clearTable() {
	a.DB.Exec("DELETE FROM ")
	a.DB.Exec("ALTER SEQUENCE users_id_seq RESTART WITH 1")
}

const tableCreationQuery = `CREATE TABLE IF NOT EXISTS users
(
    id SERIAL,
    name TEXT NOT NULL,
    baba INTEGER NOT NULL DEFAULT 0,
    winner INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)`
