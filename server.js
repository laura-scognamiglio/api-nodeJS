const express = require("express");
// const cors = require("cors");

const app = express();

// var corsOptions = {
//   origin: "http://127.0.0.1:8080" 
// };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.send({ message: "Welcome to my application." });
});

// require("./app/routes/users.routes.js")(app);

//set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});