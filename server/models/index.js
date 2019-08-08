var db = require('../db');


module.exports = {
  messages: {
    get: function (err, res) {
      if (err){
        throw err;
      } else {
        db.query("SELECT text FROM messages", (err, result, field) => {
          if (err){
            throw err;
          } else {
            res.send(result);
          }
        })
      }
    }, // a function which produces all the messages
    post: function (err, res, message) {
      console.log(message);
      if (err){
        throw err;
      } else {
        //put message into database
        db.query(`INSERT INTO messages VALUES (${message.username}, ${message.message}, ${message.roomname})`, (err, result, field) => {
          if (err){
            throw err;
          } else {
            res.end();
          }
        })
      }
    }
    // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function (err, res) {
      if (err){
        throw err;
      } else {
        db.query("SELECT username FROM usernames", (err, result) => {
          if (err){
            throw err;
          } else {
            res.send(result);
          }
        })
      }
    },
    post: function (err, res, message) {
      if (err){
        throw err;
      } else {
        //put message into database
        db.query(`INSERT INTO usernames VALUES (${message.username})`, (err) => {
          if (err){
            throw err;
          } else {
            res.end();
          }
        })
      }
    }
  }
}

