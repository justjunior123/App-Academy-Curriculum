CREATE TABLE users (

  id INTEGER PRIMARY KEY,
  fname VARCHAR(255) TEXT,
  lname VARCHAR(255) TEXT

);

  INSERT INTO
  users (fname,lname)
  VALUES
  ("Cloud","Strife"),("Luke","Smith")

----Questions

CREATE TABLE questions (

  id INTEGER PRIMARY KEY NOT NULL,
  title VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,

  author_id INTEGER NOT NULL,

  FOREIGN KEY (author_id) REFERENCES users(id)
);
