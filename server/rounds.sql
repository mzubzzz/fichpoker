CREATE TABLE rounds (
    id SERIAL,
    round_type TEXT NOT NULL DEFAULT 'classic',
    game_id INTEGER NOT NULL,
    CONSTRAINT fk_games FOREIGN KEY(game_id) REFERENCES games(id),
    CONSTRAINT rounds_pkey PRIMARY KEY (id)
);
