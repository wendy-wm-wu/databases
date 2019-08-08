var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(err, res);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      const message = req.body;
      models.messages.post(err, res, message);

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(err, res);
    },
    post: function (req, res) {
      const message = req.body;
      models.users.post(err, res, message);
    }
  }
};
