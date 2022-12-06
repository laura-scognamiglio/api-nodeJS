const Users = require("../models/users.model.js");


// Create and Save a new users
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a users
    const users = new Users({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      id_groupes: req.body.id_groupes,
      email: req.body.published || false
    });
  
    // Save users in the database
    Users.create(users, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the users."
        });
      else res.send(data);
    });
  };

// Retrieve all users from the database (with condition).

exports.findAll = (req, res) => {
    const names = req.query.firstname;
  
    Users.getAll(names, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };
  
  exports.findAllByGroupes = (req, res) => {
    Users.getAllByGroup((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving users."
        });
      else res.send(data);
    });
  };

// Find a single users with a id
exports.findOne = (req, res) => {
  
};

// find all published userss
exports.findAllPublished = (req, res) => {
  
};

// Update a users identified by the id in the request
exports.update = (req, res) => {
  
};

// Delete a users with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all userss from the database.
exports.deleteAll = (req, res) => {
  
};