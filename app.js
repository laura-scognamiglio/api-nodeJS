const express = require('express');
const app = express();
//const port = 8889


// Example requests:
//     curl http://localhost:3000/user/0
//     curl http://localhost:3000/user/0/edit
//     curl http://localhost:3000/user/1
//     curl http://localhost:3000/user/1/edit (unauthorized since this is not you)
//     curl -X DELETE http://localhost:3000/user/0 (unauthorized since you are not an admin)

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'api-nodejs',
  port: 8889,
  
})

connection.connect()

// connection.query('SELECT 1 + 1 AS solution', (err, rows, fields) => {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

// connection.end()


app.listen(8000,()=> console.log("t'es connectée meuf"))

// app.get('/', function(req, res){
//     res.send('Hello World');
//   });

  
app.get('/', (req, res) => res.send(' World!'));
// app.get('/users', (req,res) => {

    connection.query('SELECT * FROM users', function (error, results, fields) {
        if (error) throw error;
        console.log( results);
      });
    
//     //   console.log('y a un pb')
    // })

 
  
//    res.send("users");
//   });

// app.put('/users', (req, res) => {
// res.send('Got a PUT request at /users')
// })

// function loadusers() {
   
//   var user = users[req.params.id];
//   if (user) {
//     req.user = user;
//     next();
//   } else {
//     next(new Error('Failed to load user ' + req.params.id));
//   }
// }

// app.delete('/users', (req, res) => {
//     res.send('Got a DELETE request at /users')
//   })

// app.listen(port, () => console.log(`Example app listening on port ${port}!`));