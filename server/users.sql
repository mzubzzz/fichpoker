create table users (
    id SERIAL,
    name TEXT NOT NULL,
    baba INTEGER NOT NULL DEFAULT 0,
    winner INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT users_pkey PRIMARY KEY (id)
);
