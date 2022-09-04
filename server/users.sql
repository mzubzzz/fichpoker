CREATE TABLE users (
    id SERIAL,
    name TEXT NOT NULL,
    baba INTEGER NOT NULL DEFAULT 0,
    baba_card INTEGER NOT NULL DEFAULT 0,
    queen INTEGER NOT NULL DEFAULT 0,
    poker INTEGER NOT NULL DEFAULT 0,
    winner INTEGER NOT NULL DEFAULT 0,
    classic_winner INTEGER NOT NULL DEFAULT 0,
    dark_winner INTEGER NOT NULL DEFAULT 0,
    gold_winner INTEGER NOT NULL DEFAULT 0,
    ordred INTEGER,
    gained INTEGER,
    money_won INTEGER NOT NULL DEFAULT 0,
    best_friend INTEGER NOT NULL DEFAULT 0,
    punished INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (id)

);

INSERT INTO users (name) VALUES ('Берд');
INSERT INTO users (name) VALUES ('Шкляй');
INSERT INTO users (name) VALUES ('Мох');
INSERT INTO users (name) VALUES ('Фыч');
INSERT INTO users (name) VALUES ('Рыл');
INSERT INTO users (name) VALUES ('Зуб');
INSERT INTO users (name) VALUES ('Пашист');
INSERT INTO users (name) VALUES ('Макс');
