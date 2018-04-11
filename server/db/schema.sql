\c parkme_db

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  longitude INTEGER,
  latitude INTEGER,
  accuracy INTEGER
);
