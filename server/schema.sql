CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  idx INT auto_increment PRIMARY KEY,
  username VARCHAR(20),
  roomname VARCHAR(20),
  text text
  -- FOREIGN KEY (username_id) REFERENCES usernames(id),
  -- FOREIGN KEY (roomname_id) REFERENCES roomnames(id)
);

CREATE TABLE usernames (
  id INT auto_increment PRIMARY KEY,
  user_name VARCHAR(20)
);

CREATE TABLE roomnames (
  id INT auto_increment PRIMARY KEY,
  room_name VARCHAR(20)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

