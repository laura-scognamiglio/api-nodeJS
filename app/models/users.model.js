const sql = require("./db");
// const mysql = require("mysql2");


// // constructor
const Users = function(users) {
  this.firstname = users.firstname;
  this.lastname = users.lastname;
  this.email = users.email;
  // this.createdAt = users.createdAt
  // this.updatedAt = users.updateddAt
  // this.id_groupes = users.id_groupes
};

// INSERT INTO `users`( `firstname`, `lastname`, `email`, `createdAt`, `updatedAt`, `id_groupes`) VALUES ('riri','popo','popo@gmail.com',NOW(),NOW(),2)

// INSERT INTO `users` SET ? 

Users.createUser = (newUsers, result) => {
  // let query = "INSERT INTO `users`( `firstname`, `lastname`, `email`, `createdAt`, `updatedAt`, `id_groupes`) VALUES (?,?,?,NOW(),NOW(),1)"
  let query = "INSERT INTO `users` SET ?"
    sql.query(query, newUsers, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      // console.log("created users: ", {...newUsers });
      // result(null, { id: res.insertId, ...newUsers });
    });
  };


  
//   Users.findById = (id, result) => {
//     sql.query(`SELECT * FROM users WHERE id = ${id}`, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         return;
//       }
  
//       if (res.length) {
//         console.log("found users: ", res[0]);
//         result(null, res[0]);
//         return;
//       }
  
//       // not found users with the id
//       result({ kind: "not_found" }, null);
//     });
//   };
  
  Users.getAll = (result) => {
    let query = "SELECT * FROM users";
  
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
  
//   Users.getAllByGroup = (id_groupes,result) => {
//     sql.query(`SELECT * FROM users WHERE id_groupes= ${id_groupes}`, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       console.log("users: ", res);
//       result(null, res);
//     });
//   };
  
//   Users.updateById = (id, users, result) => {
//     sql.query(
//       "UPDATE users SET firstname = ?, lastname = ?, email= ? WHERE id = ?",
//       [users.firstname, users.lastname, users.email, id],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(null, err);
//           return;
//         }
  
//         if (res.affectedRows == 0) {
//           // not found users with the id
//           result({ kind: "not_found" }, null);
//           return;
//         }
  
//         console.log("updated users: ", { id: id, ...users });
//         result(null, { id: id, ...users });
//       }
//     );
//   };
  
//   Users.remove = (id, result) => {
//     sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       if (res.affectedRows == 0) {
//         // not found users with the id
//         result({ kind: "not_found" }, null);
//         return;
//       }
  
//       console.log("deleted users with id: ", id);
//       result(null, res);
//     });
//   };
  
//   Users.removeAll = result => {
//     sql.query("DELETE FROM users", (err, res) => {
//       if (err) {
//         console.log("error: ", err);
//         result(null, err);
//         return;
//       }
  
//       console.log(`deleted ${res.affectedRows} users`);
//       result(null, res);
//     });
//   };
  
//   module.exports = Users;