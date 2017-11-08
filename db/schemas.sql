DROP DATABASE IF EXISTS apiAuth;
CREATE DATABASE apiAuth;

\c apiAuth;


CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

INSERT INTO users (email,password)
  VALUES ('natty.davis79@gmail.com', 'nattyb123');
