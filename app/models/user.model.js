const sql = require("./db.js");

// constructor
const Users = function(users) {
  this.title = users.firstname;
  this.description = users.lastname;
  this.published = users.email;
  this.createdAt = users.createdAt
};

Users.create = (newUsers, result) => {
    sql.query("INSERT INTO users SET ?", newUsers, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("created users: ", { id: res.insertId, ...newUsers });
      result(null, { id: res.insertId, ...newUsers });
    });
  };
  
  Users.findById = (id, result) => {
    sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found users: ", res[0]);
        result(null, res[0]);
        return;
      }
  
      // not found users with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Users.getAll = (firstname, result) => {
    let query = "SELECT * FROM users";
  
    if (firstname) {
      query += ` WHERE title LIKE '%${firstname}%'`;
    }
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };
  
  Users.getAllPublished = result => {
    sql.query("SELECT * FROM users WHERE published=true", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("users: ", res);
      result(null, res);
    });
  };
  
  Users.updateById = (id, users, result) => {
    sql.query(
      "UPDATE users SET firstname = ?, lastname = ?, email= ? WHERE id = ?",
      [users.firstname, users.lastname, users.email, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found users with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("updated users: ", { id: id, ...users });
        result(null, { id: id, ...users });
      }
    );
  };
  
  Users.remove = (id, result) => {
    sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        // not found users with the id
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted users with id: ", id);
      result(null, res);
    });
  };
  
  Users.removeAll = result => {
    sql.query("DELETE FROM users", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log(`deleted ${res.affectedRows} users`);
      result(null, res);
    });
  };
  
  module.exports = Users;