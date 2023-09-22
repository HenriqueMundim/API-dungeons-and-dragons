CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL UNIQUE,
    number_characters INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    class_name TEXT NOT NULL UNIQUE
);

CREATE TABLE charecters (
    id SERIAL PRIMARY KEY,
    character_name TEXT NOT NULL UNIQUE,
    class_id INTEGER REFERENCES classes(id),
    character_level INTEGER DEFAULT 0
);