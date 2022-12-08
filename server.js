const express = require("express");
const cors = require('cors');
const helmet = require("helmet");
const bodyParser = require("body-parser")

const app = express();
const router = require("./app/routes/users.routes.js")

var corsOptions = {
    origin: "http://localhost:8081"
  };


// enabling CORS for all requests
app.use(cors(corsOptions));
// adding Helmet to enhance your Rest API's security
app.use(helmet());
// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});

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