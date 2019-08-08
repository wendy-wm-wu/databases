var db = require('../db');


module.exports = {
  messages: {
    get: function (callback) {
      db.query("SELECT * FROM messages;", (err, result) => {
        if (err) {
          throw err;
        } else {
          callback(null, result);
        }
      })

    }, // a function which produces all the messages
    post: function (message, callback) {
      console.log(message);
      //put message into database
      db.query(`INSERT INTO messages (username, roomname, text) VALUES ("${message.username}",  "${message.roomname}", "${message.message}");`, (err, result, field) => {
        if (err) {
          throw err;
        } else {
          callback(null);
        }
      })

    }
    // a function which can be used to insert a message into the database

  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query("SELECT user_name FROM usernames;", (err, result, field) => {
        if (err) {
          throw err;
        } else {
          callback(null, result);
        }
      })
    },
    post: function (message, callback) {
      //put message into database
      console.log(message);
      db.query(`INSERT INTO usernames (user_name) VALUES ('${message.user_name}');`, (err, result, field) => {
        if (err) {
          throw err;
        } else {
          callback(null);
        }
      })
    }
  }
}

