CREATE TABLE roundsUsers (
    Id SERIAL,
    round_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    CONSTRAINT fk_rounds FOREIGN KEY(round_id) REFERENCES rounds(id),
    CONSTRAINT fk_users FOREIGN KEY(user_id) REFERENCES users(id),
    CONSTRAINT roundsUsers_pkey PRIMARY KEY (id)
);
