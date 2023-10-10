CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    player_name TEXT NOT NULL UNIQUE,
    number_characters INTEGER NOT NULL DEFAULT 0,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE classes (
    id SERIAL PRIMARY KEY,
    class_name TEXT NOT NULL
);

CREATE TABLE characters (
    id SERIAL PRIMARY KEY,
    character_name TEXT NOT NULL UNIQUE,
    class_id INTEGER REFERENCES classes(id),
    character_level INTEGER DEFAULT 0,
    user_id INTEGER REFERENCES users(id)
);

INSERT INTO classes(class_name)
VALUES
('BARBARIAN'),
('BARD'),
('CLERIC'),
('DRUID'),
('FIGHTER'),
('MONK'),
('PALADIN'),
('RANGER'),
('ROGUE'),
('SORCERER'),
('WARLOCK'),
('WIZARD');

