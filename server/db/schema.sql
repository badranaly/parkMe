\c parkme_db

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  longitude double precision,
  latitude double precision,
  accuracy double precision,
  looking BOOLEAN,
  leaving BOOLEAN,
  user_id INTEGER
);

CREATE TABLE match (
  looking_id INTEGER,
  leaving_id INTEGER
)
