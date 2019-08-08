CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  index INT auto_increment PRIMARY KEY,
  username VARCHAR(20),
  text text,
  roomname VARCHAR(20),
  FOREIGN KEY username REFERENCES usernames(id)
  FOREIGN KEY roomname REFERENCES roomnames(id)
);

CREATE TABLE usernames (
  /* Describe your table here.*/
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(20)
);

CREATE TABLE roomnames (
  /* Describe your table here.*/
  id INT auto_increment PRIMARY KEY,
  name VARCHAR(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

