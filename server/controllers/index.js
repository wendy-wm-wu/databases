var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((err, result) => {
        if (err) {
          throw err;
        } else {
          console.log(result);
          res.send(result);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const message = req.body;
      models.messages.post(message, (err) => {
        if (err) {
          throw err;
        } else {
          res.send('success');
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((err, result) => {
        if (err) {
          throw err;
        } else {
          res.send(result);
        }
      });
    },
    post: function (req, res) {
      const message = req.body;
      models.users.post(message, (err, result) => {
        if (err) {
          throw err;
        } else {
          res.send('success');
        }
      });
    }
  }
};
