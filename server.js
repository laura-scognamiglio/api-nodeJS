const express = require("express");
// const  users  = require("./app/config/db.config.js");
// const cors = require("cors");
const app = express();
const router = require("./app/routes/users.routes.js")



// var corsOptions = {
//   origin: "http://127.0.0.1:8000" 
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to my application." });
// });

app.use('/api', router);

// router.get('/users', (req, res) => {
//     res.json({ message: "Wppoiiijojiooih. route des users" });

// })
    
module.exports = router;
//set port, listen for requests
// const PORT = process.env.PORT || 3306;

app.listen(8000, () => {
  console.log(`Server is running on port`);
});