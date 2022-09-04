package main

type Round struct {
	ID      uint   `json:"id"`
	Type    string `json:"type"`
	GameId  uint   `json: "game_id"`
	Players []User `json:"players"`
}
